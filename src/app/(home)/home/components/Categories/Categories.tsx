import Category from "./Category";
import { CategoryItem } from "./CategoryItem";

type CategoriesProps = { data: never[] };

function Categories({ data }: CategoriesProps) {
  console.log(data);

  return (
    <div className="container mx-auto md:px-28 px-10 py-4 ">
      <div className="w-full lg:py-2 bg-neutral-000 lg:items-start flex-wrap lg:justify-around flex overflow-x-auto overflow-y-hidden hide-scrollbar">
        {data.slice(0,9).map((category) => {
          return (
            <Category
              key={category?.id}
              url={category?.icon?.url[0]}
              title={category.title}
            />
          );
        })}
        <Category url="/images/category/more.png" title="بیشتر" />
      </div>
    </div>
  );
}

export default Categories;
