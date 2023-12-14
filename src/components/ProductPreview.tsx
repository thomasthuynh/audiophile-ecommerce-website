import { Link } from "react-router-dom";
import { Product } from "../types";

type Props = {
  item: Product;
  index: number;
};

const ProductPreview = ({ item, index }: Props) => {
  return (
    <div className="mx-auto flex w-5/6 flex-col items-center py-16 xl:flex-row xl:justify-around">
      <div
        className={`${
          index % 2 === 1 && "xl:order-2"
        } max-w-[400px] pb-4 md:max-w-[850px] xl:w-2/5`}
      >
        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet={item.categoryImage.desktop}
          />
          <source
            media="(min-width: 768px)"
            srcSet={item.categoryImage.tablet}
          />
          <img
            src={item.categoryImage.mobile}
            alt={item.name}
            className="w-full rounded-md"
          />
        </picture>
      </div>

      <div className="text-center md:w-[90%] lg:w-4/5 xl:w-2/5 xl:text-left">
        {item.new && (
          <p className="py-2 text-xs uppercase tracking-[10px] text-primary-500 sm:text-base">
            New Product
          </p>
        )}
        <h2 className="pt-4 text-2xl uppercase sm:text-3xl xl:text-4xl">
          {item.name}
        </h2>
        <p className="py-6 text-neutral-500 xl:text-lg">{item.description}</p>
        <Link
          to={`/${item.category}/${item.slug}`}
          className="inline-block bg-primary-500 px-6 py-3 text-sm uppercase tracking-[1px] text-white hover:bg-primary-300 sm:px-8 sm:py-4 sm:text-base"
        >
          See Product
        </Link>
      </div>
    </div>
  );
};

export default ProductPreview;
