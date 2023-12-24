import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Product } from "../types";
import CartContext from "../context/CartContext";

import { BsArrowLeft } from "react-icons/bs";

type Props = {
  productData: Product[];
  setCartModal: (value: boolean) => void;
};

const ProductInfo = ({ productData, setCartModal }: Props) => {
  const { slug } = useParams();
  const {
    state: { cart },
    dispatch,
  } = useContext(CartContext);

  const product = productData.find((item) => item.slug === slug);

  if (!product) {
    return null;
  }

  const existsInCart = cart.some((item) => item.id === product.id);

  const handleCart = () => {
    setCartModal(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="pt-[74px]">
      <div className="wrapper">
        {/* LINK */}
        <Link
          to={`/${product.category}`}
          className="mb-4 mt-6 inline-flex items-center capitalize text-neutral-500 hover:opacity-80"
        >
          <BsArrowLeft className="mr-2" />
          <p>{product.category}</p>
        </Link>

        {/* PRODUCT */}
        <div className="flex flex-col md:flex-row md:gap-8 lg:gap-12 xl:justify-between">
          {/*IMAGE */}
          <div className="py-4 md:w-[45%] md:max-w-[400px] md:pr-4 xl:max-w-none">
            <picture>
              <source
                media="(min-width: 1280px)"
                srcSet={product.image.desktop}
              />
              <source
                media="(min-width: 768px)"
                srcSet={product.image.tablet}
              />
              <img
                src={product.image.mobile}
                alt={product.name}
                className="w-full rounded-md"
              />
            </picture>
          </div>

          {/* INFO */}
          <div className="flex flex-col md:flex-1 md:justify-center xl:w-1/2 xl:flex-none">
            <div className="mx-auto xl:w-[90%] 2xl:w-5/6">
              <div>
                {product.new && (
                  <p className="py-2 text-xs uppercase tracking-[10px] text-primary-500 sm:text-base">
                    New Product
                  </p>
                )}

                <h2 className="pt-4 text-2xl uppercase sm:text-3xl xl:text-4xl">
                  {product.name}
                </h2>

                <p className="py-6 text-neutral-500 xl:text-lg">
                  {product.description}
                </p>
                <p className="text-lg font-bold tracking-[1px] md:text-xl">
                  ${product.price}
                </p>
              </div>

              <div className="flex gap-4 py-6">
                {existsInCart ? (
                  <button
                    onClick={handleCart}
                    className="bg-primary-500 px-6 py-3 text-sm uppercase tracking-[1px] text-white hover:bg-primary-300 sm:px-8 sm:py-4 sm:text-base"
                  >
                    View In Cart
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      dispatch({
                        type: "ADD_TO_CART",
                        payload: product,
                      });
                    }}
                    className="bg-primary-500 px-6 py-3 text-sm uppercase tracking-[1px] text-white hover:bg-primary-300 sm:px-8 sm:py-4 sm:text-base"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-16 py-16 xl:grid-cols-6 xl:justify-between xl:gap-0">
          {/* FEATURES  */}
          <div className="xl:col-span-3">
            <h3 className="py-4 text-xl uppercase md:text-2xl">Features</h3>
            <p className="text-neutral-500 xl:text-lg">{product.features}</p>
          </div>

          {/* IN THE BOX */}
          <div className="xl:col-span-2 xl:col-start-5">
            <h3 className="py-4 text-xl uppercase md:text-2xl">In The Box</h3>
            <ul className="xl:text-lg">
              {product.includes.map((addon, index) => (
                <li className="py-1 text-neutral-500" key={index}>
                  <span className="pr-4 font-bold text-primary-500">
                    {addon.quantity}x
                  </span>
                  {addon.item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* GALLERY */}
        <div className="grid gap-4 py-16 md:grid-cols-5 md:grid-rows-2">
          <picture className="md:col-span-2">
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
              className="h-full w-full rounded-md object-cover"
            />
          </picture>

          <picture className="md:col-span-2 md:row-start-2">
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
              className="h-full w-full rounded-md object-cover"
            />
          </picture>

          <picture className="md:col-span-3 md:row-span-2">
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
              className="h-full w-full rounded-md object-cover"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
