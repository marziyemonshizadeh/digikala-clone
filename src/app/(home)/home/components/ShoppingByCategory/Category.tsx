type Props = {
    data:any
}

function Category({data}: Props) {
  return (
    <span
      data-cro-id="hp-categories-icons"
      className="h-40 px-4 col-span-1 max-w-[143px]"
    >
      <a
        className="flex flex-col items-center user-select-none w-full lg:p-0 lg:mx-0"
        href="/landing/mobile/"
      >
        <div className="flex items-center justify-center size-[100px]">
          <img
            className="w-full h-full inline-block object-contain"
            src={data?.image}
            width="100"
            height="100"
            alt={data?.title}
          />
        </div>
        <p className="text-neutral-700 mt-1 text-sm font-semibold text-center px-3 lg:px-4">
        {data?.title}
        </p>
      </a>
    </span>
  );
}

export default Category;
