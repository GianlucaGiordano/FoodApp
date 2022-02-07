import CartIcon from "../Cart/CartIcon";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.showModal}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{props.amountTotal}</span>
    </button>
  );
};

export default HeaderCartButton;
