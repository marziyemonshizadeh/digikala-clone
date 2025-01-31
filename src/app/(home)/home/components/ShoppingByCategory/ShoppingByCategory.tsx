import Category from "./Category";

type ShoppingByCategoryProps = {
  data: any;
};

function ShoppingByCategory({ data }: ShoppingByCategoryProps) {
  return (
    <div className="container-2xl-w mx-auto lg:px-4 2xl:px-0">
      <div className="w-full py-3 lg:pt-4 lg:pb-10 flex flex-col items-center">
        <div className="mb-6 lg:mb-9 text-center">
          <h3 className="text-h3">{data?.title} </h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="grid lg:grid-cols-8 md:grid-cols-6 grid-cols-4 gap-4">
            {data?.categories?.map((item: any) => {
              return <Category data={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingByCategory;
