"use client";

import { useState } from "react";
import FooterInfo from "./FooterInfo/FooterInfo";

function FooterSlogan() {
  const [open, setOpen] = useState(false);
  const handleShowMoreInfo = (e: React.ChangeEvent<HTMLInputElement> | any) => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="flex items-start justify-between border-y py-8 mx-4 border-slate-200 flex-wrap lg:flex-nowrap">
      <FooterInfo open={open} handleShowMoreInfo={handleShowMoreInfo} />
      <div className="w-full flex items-center mt-4 lg:mt-0 justify-center lg:justify-end">
        <a
          className="cursor-pointer p-1 size-[108px] flex items-center justify-center border border-slate-200 rounded mr-2"
          target="_blank"
          href="https://trustseal.enamad.ir/?id=19077&amp;Code=sScdOJOzhFxtcEqkjP7P"
        >
          <img
            alt="namad"
            src="/images/samandehipng.png"
            className="size-[75px] object-contain"
          />
        </a>
        <a
          className="cursor-pointer p-1 size-[108px] flex items-center justify-center border border-slate-200 rounded mr-2"
          target="_blank"
          href="https://trustseal.enamad.ir/?id=19077&amp;Code=sScdOJOzhFxtcEqkjP7P"
        >
          <img
            alt="namad"
            src="/images/etehadiekeshvaripng.png"
            className="size-[75px] object-contain"
          />
        </a>
        <a
          className="cursor-pointer p-1 size-[108px] flex items-center justify-center border border-slate-200 rounded mr-2"
          target="_blank"
          href="https://trustseal.enamad.ir/?id=19077&amp;Code=sScdOJOzhFxtcEqkjP7P"
        >
          <img
            alt="namad"
            src="/images/namadElectronic.png"
            className="size-[75px] "
          />
        </a>
      </div>
    </div>
  );
}

export default FooterSlogan;
