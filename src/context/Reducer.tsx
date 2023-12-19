export const cartReducer = (state, action) => {
  switch(action.type) {
    case "ADD_TO_CART":
    const isInCart = state.cart.some((item) => item.id === action.payload.prod.id)

    if (isInCart) {
      return {
        cart: state.cart.map((item) => (
          item.id === action.payload.prod.id ? {...item, quantity: item.quantity + action.payload.qty} : item
        ))
      }
    } else {
      return {
        cart: [...state.cart, { ...action.payload.prod, quantity: action.payload.qty }]
      }
    }
  }
}