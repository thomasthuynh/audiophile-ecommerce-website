import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

type Props = {
  itemQuantity: number;
  setItemQuantity: (value: ((prevQuantity: number) => number)) => void;
};

const QuantityInput = ({ itemQuantity, setItemQuantity }: Props) => {
  const handleDecrement = () => {
    if (itemQuantity > 1) {
      setItemQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleIncrement = () => {
    if (itemQuantity < 10) setItemQuantity((prevQuantity) => prevQuantity + 1);
  };

  return (
    <div className="flex justify-between bg-gray-100">
      <button
        onClick={handleDecrement}
        className="px-3 hover:text-primary-500 sm:px-5"
        aria-label="Decrease quantity"
      >
        <AiOutlineMinus size={10} />
      </button>
      <input
        type="number"
        value={itemQuantity}
        readOnly
        className="max-w-[30px] bg-gray-100 text-center font-bold"
      />
      <button
        onClick={handleIncrement}
        className="px-3 hover:text-primary-500 sm:px-5"
        aria-label="Increase quantity"
      >
        <AiOutlinePlus size={10} />
      </button>
    </div>
  );
};

export default QuantityInput;
