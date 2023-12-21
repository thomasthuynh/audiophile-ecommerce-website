import { useContext } from "react";
import CartContext from "../context/CartContext";
import QuantityInput from "../ui/QuantityInput";

type Props = {};

const Cart = ({}: Props) => {
  const {
    state: { cart },
    dispatch,
  } = useContext(CartContext);

  return (
    <div className="absolute left-1/2 top-[106px] w-5/6 -translate-x-1/2 rounded-md border border-black bg-white p-4">
      <div className="flex justify-between">
        <p className="font-bold uppercase">Cart ({cart.length})</p>
        {/* <button className="text-sm text-neutral-500 underline">
          Remove All
        </button> */}
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
                  onClick={() => dispatch({ type: "REMOVE", payload: product })}
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
    </div>
  );
};

export default Cart;
