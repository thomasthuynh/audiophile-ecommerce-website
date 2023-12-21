import { Product, CartState } from "../types";

type CartAction =
  | { type: "ADD_TO_CART"; payload: Product }
  | { type: "INCREASE_QUANTITY"; payload: Product }
  | { type: "DECREASE_QUANTITY"; payload: Product }
  | { type: "REMOVE"; payload: Product };

export const cartReducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case "INCREASE_QUANTITY":
      return {
        cart: state.cart.map((item: Product) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity:
                  (item.quantity ?? 0) < 10 ? (item.quantity ?? 0) + 1 : 10,
              }
            : item,
        ),
      };
    case "DECREASE_QUANTITY":
      return {
        cart: state.cart.map((item: Product) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity:
                  (item.quantity ?? 0) > 1 ? (item.quantity ?? 0) - 1 : 1,
              }
            : item,
        ),
      };
    case "REMOVE":
      return {
        cart: state.cart.filter(
          (item: Product) => item.id !== action.payload.id,
        ),
      };
  }
};
