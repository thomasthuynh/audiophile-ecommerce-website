import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";

import ConfirmationIcon from "../assets/checkout/icon-order-confirmation.svg";

const OrderConfirmation = () => {
  const {
    state: { cart },
  } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (items, currentItem) =>
      items + currentItem.price * (currentItem.quantity ?? 0),
    0,
  );

  return (
    <div className="absolute left-1/2 top-[170px] z-30 w-full -translate-x-1/2 rounded-lg border border-black bg-white p-8">
      <div>
        <div>
          <img src={ConfirmationIcon} alt="Order confirmation check mark" />
        </div>

        <div className="py-6">
          <h1 className="pb-4 text-2xl uppercase">Thank you for your order</h1>
          <p className="text-neutral-500">
            You will receive an email confirmation shortly.
          </p>
        </div>

        <div className="mb-4 overflow-hidden rounded-lg">
          <div className="bg-gray-100 p-4">
            {/* INFO */}
            <div className="flex items-center justify-between pb-2">
              {/* IMAGE, NAME AND PRICE */}
              <div className="flex items-center">
                <div className="mr-2 w-1/3">
                  <img
                    src={cart[0].image.mobile}
                    alt={cart[0].name}
                    className="w-full"
                  />
                </div>

                <div className="text-sm font-bold">
                  <p className="pb-[2px]">{cart[0].name.split(" ")[0]}</p>
                  <p className="text-neutral-500">${cart[0].price}</p>
                </div>
              </div>

              {/* QUANTITY */}
              <div className="text-sm font-bold">
                <p className="text-neutral-500">x{cart[0].quantity}</p>
              </div>
            </div>

            {/* OTHER ITEMS */}
            {cart.length > 1 && (
              <div className="border-t border-neutral-300 pt-2 text-center text-xs font-bold text-neutral-500">
                <p>and {cart.length - 1} other item(s)</p>
              </div>
            )}
          </div>

          {/* TOTAL */}
          <div className="bg-black p-4">
            <p className="pb-2 uppercase text-neutral-500 text-sm">Grand Total</p>
            <p className="tracking-wider text-white">${totalPrice}</p>
          </div>
        </div>

        <Link
          to="/"
          className="mt-2 inline-block w-full bg-primary-500 px-6 py-3 text-center text-sm uppercase tracking-[1px] text-white hover:bg-primary-300 sm:px-8 sm:py-4 sm:text-base"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;
