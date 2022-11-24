import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>{props.text}</span>
      <span className={classes.badge}>{props.badges}3</span>
    </button>
  );
};

export default HeaderCartButton;
