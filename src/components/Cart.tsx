import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";
import QuantityInput from "../ui/QuantityInput";

type Props = {};

const Cart = ({}: Props) => {
  const {
    state: { cart },
    dispatch,
  } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (items, currentItem) =>
      items + currentItem.price * (currentItem.quantity ?? 0),
    0,
  );

  return (
    <div className="fixed left-1/2 top-[106px] z-10 w-5/6 -translate-x-1/2 rounded-md border border-black bg-white p-4">
      {/* CART */}
      <div>
        <div className="flex justify-between pb-2">
          <p className="font-bold uppercase">Cart ({cart.length})</p>
        </div>

        <div>
          {cart.map((product) => (
            <div
              key={product.id}
              className="flex w-full items-center justify-between gap-4 py-4"
            >
              <div className="flex items-center">
                <div className="min-w-[50px] max-w-[75px]">
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
                    onClick={() =>
                      dispatch({ type: "REMOVE", payload: product })
                    }
                    className="text-xs text-primary-500 hover:text-primary-300"
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
          <p className="text-sm font-bold uppercase text-neutral-500">Total</p>
          <p className="font-bold">${totalPrice}</p>
        </div>
        <Link
          to="/"
          className={`${
            cart.length < 1
              ? "pointer-events-none mt-2 inline-block w-full bg-neutral-500 px-6 py-3 text-center text-sm uppercase tracking-[1px] text-white sm:px-8 sm:py-4 sm:text-base"
              : "mt-2 inline-block w-full bg-primary-500 px-6 py-3 text-center text-sm uppercase tracking-[1px] text-white hover:bg-primary-300 sm:px-8 sm:py-4 sm:text-base"
          } `}
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
