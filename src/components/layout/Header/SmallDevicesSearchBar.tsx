import SearchIcon from "@/assets/icons/SearchIcon";

function SmallDevicesSearchBar() {
  return (
    <div className="lg:hidden block flex-1">
      <div className="flex items-center  ellipsis rounded-full bg-neutral-100 h-10 border-none grow  px-0 lg:px-4">
        <div className="w-full rounded-full">
          <div className="flex items-center justify-between grow min-w-0 h-9 px-3">
            <div className="flex cursor-pointer">
              <SearchIcon />
            </div>
            <span
              data-cro-id="searchbox-type"
              className="grow px-2 lg:px-4 h-10 ellipsis"
            >
              <div className="lg:text-body-2 text-button-1 flex items-center h-full text-body-2 text-neutral-500">
                <div className="flex gap-1 items-center">
                  <span className="lg:text-subtitle text-button-1 text-neutral-500 opacity-70">
                    جستجو در
                  </span>
                  <div
                    style={{
                      width: "61px",
                      height: "16px",
                      lineHeight: "0",
                    }}
                  >
                    <img
                      className="w-full inline-block"
                      src="	https://www.digikala.com/brand/typography.svg"
                      width="61"
                      height="16"
                      alt="دیجی‌کالا"
                      title=""
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallDevicesSearchBar;
