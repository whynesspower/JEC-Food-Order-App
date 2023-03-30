import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeadercartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);
  // the above code means,
  // go to every elemnet of the items array, and every object of
  // items array will have amount of items. that amount of items is added to running count of zero

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>{" "}
      </span>
      <span>Your Cart </span>
      <span className={classes.badge}>3</span>
    </button>
  );
};
export default HeadercartButton;
