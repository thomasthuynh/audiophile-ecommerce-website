import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import CartContext from "../context/CartContext";
import QuantityInput from "../ui/QuantityInput";

import { FaXmark } from "react-icons/fa6";

type Props = {
  setCartModal: (value: boolean) => void;
};

const Cart = ({ setCartModal }: Props) => {
  const {
    state: { cart },
    dispatch,
  } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (items, currentItem) =>
      items + currentItem.price * (currentItem.quantity ?? 0),
    0,
  );

  const location = useLocation();
  const checkoutPath = location.pathname.includes("/checkout");

  return (
    <div className="absolute left-1/2 top-[106px] z-30 w-full -translate-x-1/2 rounded-lg bg-white p-6 sm:w-2/3 md:left-auto md:right-0 md:w-[350px] md:translate-x-0">
      {/* CART */}
      <div className="flex justify-between pb-4">
        <p className="font-bold uppercase sm:text-lg">Cart ({cart.length})</p>
        <button
          onClick={() => setCartModal(false)}
          className="hover:opacity-80"
        >
          <FaXmark size={20} />
        </button>
      </div>

      <div>
        {cart.map((product) => (
          <div
            key={product.id}
            className="flex w-full items-center justify-between py-3"
          >
            <div className="flex items-center">
              <div className="max-w-[60px]">
                <img
                  src={product.image.mobile}
                  alt={product.name}
                  className="w-full rounded-md"
                />
              </div>

              <div className="flex flex-col pl-4 font-bold">
                <p className="text-sm">{product.name.split(" ")[0]}</p>
                <p className="text-xs text-neutral-500">${product.price}</p>
                <button
                  onClick={() => dispatch({ type: "REMOVE", payload: product })}
                  className="pt-1 text-xs text-primary-500 hover:text-primary-300"
                >
                  Remove
                </button>
              </div>
            </div>

            <QuantityInput
              product={product}
              productQuantity={product.quantity || 1}
            />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between py-4">
        <p className="text-sm font-bold uppercase text-neutral-500 sm:text-base">
          Total
        </p>
        <p className="font-bold tracking-wider sm:text-lg">${totalPrice}</p>
      </div>
      {checkoutPath ? (
        <Link
          to="/"
          className="mt-2 inline-block w-full bg-primary-500 px-6 py-3 text-center text-sm uppercase tracking-[1px] text-white hover:bg-primary-300 sm:px-8 sm:py-4 sm:text-base"
        >
          Back to Home
        </Link>
      ) : (
        <Link
          to="/checkout"
          className={`${
            cart.length < 1
              ? "pointer-events-none mt-2 inline-block w-full bg-neutral-500 px-6 py-3 text-center text-sm uppercase tracking-[1px] text-white sm:px-8 sm:py-4 sm:text-base"
              : "mt-2 inline-block w-full bg-primary-500 px-6 py-3 text-center text-sm uppercase tracking-[1px] text-white hover:bg-primary-300 sm:px-8 sm:py-4 sm:text-base"
          } `}
        >
          Checkout
        </Link>
      )}
    </div>
  );
};

export default Cart;
