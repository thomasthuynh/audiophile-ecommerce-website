import { useContext } from "react";
import CartContext from "../context/CartContext";

import { Product } from "../types";

import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

type Props = {
  product: Product;
  productQuantity: number;
};

const QuantityInput = ({ product, productQuantity }: Props) => {
  const {
    dispatch,
  } = useContext(CartContext);

  return (
    <div className="flex h-[35px] justify-between bg-gray-100">
      <button
        onClick={() =>
          dispatch({ type: "DECREASE_QUANTITY", payload: product })
        }
        className="px-3 hover:text-primary-500 sm:px-5"
        aria-label="Decrease quantity"
      >
        <AiOutlineMinus size={10} />
      </button>
      <input
        type="number"
        value={productQuantity}
        readOnly
        className="max-w-[20px] bg-gray-100 text-center text-sm font-bold"
      />
      <button
        onClick={() => dispatch({ type: "INCREASE_QUANTITY", payload: product })}
        className="px-3 hover:text-primary-500 sm:px-5"
        aria-label="Increase quantity"
      >
        <AiOutlinePlus size={10} />
      </button>
    </div>
  );
};

export default QuantityInput;
