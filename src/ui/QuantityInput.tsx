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
  const { dispatch } = useContext(CartContext);

  return (
    <div className="flex h-[35px] justify-between bg-gray-100">
      <button
        onClick={() =>
          dispatch({ type: "DECREASE_QUANTITY", payload: product })
        }
        className="px-2 hover:text-primary-500 min-[360px]:px-3"
        aria-label="Decrease quantity"
      >
        <AiOutlineMinus size={10} />
      </button>
      <div className="flex w-[20px] items-center justify-center bg-gray-100 text-center text-sm font-bold">
        {productQuantity}
      </div>
      <button
        onClick={() =>
          dispatch({ type: "INCREASE_QUANTITY", payload: product })
        }
        className="px-2 hover:text-primary-500 min-[360px]:px-3"
        aria-label="Increase quantity"
      >
        <AiOutlinePlus size={10} />
      </button>
    </div>
  );
};

export default QuantityInput;
