import { useParams, Link } from "react-router-dom";
import { Product } from "../types";
import CompanyInfo from "./CompanyInfo";
import ProductCategories from "./ProductCategories";

type Props = {
  productData: Product[];
};

const ProductInfo = ({ productData }: Props) => {
  const { slug } = useParams();

  const product = productData.find((item) => item.slug === slug);

  if (!product) {
    return <div className="pt-[74px]">Product not found</div>;
  }

  return (
    <div className="pt-[74px]">
      <div className="mx-auto w-5/6">
        <Link to={`/${product.category}`}>
          <div className="py-4 text-neutral-500">Go Back</div>
        </Link>

        <div className="py-4">
          <picture>
            <source
              media="(min-width: 1280px)"
              srcSet={product.image.desktop}
            />
            <source media="(min-width: 768px)" srcSet={product.image.tablet} />
            <img
              src={product.image.mobile}
              alt={product.name}
              className="w-full rounded-md"
            />
          </picture>
        </div>

        <div>
          {product.new && (
            <p className="py-2 text-xs uppercase tracking-[10px] text-primary-500 sm:text-base">
              New Product
            </p>
          )}

          <h2 className="pt-4 text-2xl uppercase md:text-3xl xl:text-4xl">
            {product.name}
          </h2>

          <p className="py-6 text-neutral-500 xl:text-lg">
            {product.description}
          </p>
          <p className="text-lg font-bold tracking-[1px]">$ {product.price}</p>
        </div>

        <div className="flex gap-4 py-6">
          <input type="number" className="w-1/3 bg-gray-100 p-2 font-bold" />
          <button className="bg-primary-500 px-6 py-3 text-sm uppercase tracking-[1px] text-white hover:bg-primary-300 sm:px-8 sm:py-4 sm:text-base">
            Add to Cart
          </button>
        </div>

        <div className="py-16">
          <h3 className="py-4 text-xl uppercase">Features</h3>
          <p className="text-neutral-500">{product.features}</p>
        </div>

        <div>
          <h3 className="py-4 text-xl uppercase">In The Box</h3>
          {product.includes.map((addon, index) => (
            <p className="text-neutral-500" key={index}>
              <span className="pr-4 font-bold text-primary-500">
                {addon.quantity}x
              </span>
              {addon.item}
            </p>
          ))}
        </div>

        <div className="grid gap-4 py-16">
          <picture>
            <source
              media="(min-width: 1280px)"
              srcSet={product.gallery.first.desktop}
            />
            <source
              media="(min-width: 768px)"
              srcSet={product.gallery.first.tablet}
            />
            <img
              src={product.gallery.first.mobile}
              alt="Gallery image"
              className="w-full rounded-md"
            />
          </picture>

          <picture>
            <source
              media="(min-width: 1280px)"
              srcSet={product.gallery.second.desktop}
            />
            <source
              media="(min-width: 768px)"
              srcSet={product.gallery.second.tablet}
            />
            <img
              src={product.gallery.second.mobile}
              alt="Gallery image"
              className="w-full rounded-md"
            />
          </picture>

          <picture>
            <source
              media="(min-width: 1280px)"
              srcSet={product.gallery.third.desktop}
            />
            <source
              media="(min-width: 768px)"
              srcSet={product.gallery.third.tablet}
            />
            <img
              src={product.gallery.third.mobile}
              alt="Gallery image"
              className="w-full rounded-md"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
