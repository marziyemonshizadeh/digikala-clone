type CategoryProps = {
  url: string;
  title: string;
};

function Category({ url, title }: CategoryProps) {
  return (
    <div className="flex flex-col items-center user-select-none my-2 lg:my-0 lg:w-35 w-1/8 shrink-0 lg:!w-[82px] w-[75px]">
      <div style={{ width: "52px", height: "52px", lineHeight: "0" }}>
        <img alt={title} src={url} className="w-full inline-block" />
      </div>
      <span className="text-neutral-700 mt-1 text-sm font-semibold text-center px-3 lg:px-4">
        {title}
      </span>
    </div>
  );
}

export default Category;
