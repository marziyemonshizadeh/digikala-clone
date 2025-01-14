import Category from "./Category";
import { CategoryItem } from "./CategoryItem";

function Categories() {
  return (
    <div className="container mx-auto lg:px-4 lg:py-4 2xl:px-0">
      <div className="w-full lg:py-2 bg-neutral-000 lg:items-start flex-wrap lg:justify-around flex overflow-x-auto overflow-y-hidden hide-scrollbar">
        {CategoryItem.map((category) => {
          return (
            <Category
              key={category.id}
              url={category.url}
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
