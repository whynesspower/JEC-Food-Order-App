import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const CartReducer = (state, action) => {
  return defaultCartState;
};

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};
  const removeItemFromCartHandler = (id) => {};
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.CartProvider value={cartContext}>
      {props.children}
    </CartContext.CartProvider>
  );
};
export default CartProvider;

// this js file or component exist to manage, add, delete stuff from our real context.
