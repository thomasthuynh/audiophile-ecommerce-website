import { Link } from "react-router-dom";
import ArrowRight from "../assets/shared/desktop/icon-arrow-right.svg";

type Props = {
  product: string;
  image: string;
};

const CategoryProduct = ({ product, image }: Props) => {
  return (
    <div className="my-8 rounded-md bg-gray-100 sm:my-16">
      <div className="flex -translate-y-[30%] flex-col items-center">
        <img src={image} alt={product} className="w-2/5 md:w-3/5" />

        <div className="-mb-4 lg:-mb-8 xl:-mb-10">
          <p className="font-bold uppercase md:pb-2 xl:text-xl">{product}</p>
          <Link
            to={`/${product}`}
            className="mt-2 flex items-center justify-center text-xs font-bold uppercase text-neutral-500 hover:text-primary-500 xl:text-base"
          >
            Shop
            <span className="ml-2">
              <img src={ArrowRight} alt="Arrow right" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
