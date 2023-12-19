import { createContext, useReducer, ReactNode } from "react";
import { cartReducer } from "./Reducer";

import { CartContextProps } from "../types";

const defaultCartContext: CartContextProps = {
  state: { cart: [] },
  dispatch: () => {},
};

const CartContext = createContext<CartContextProps>(defaultCartContext);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
  });

  console.log(state)

  return (
    <CartContext.Provider value={{ dispatch, state }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
