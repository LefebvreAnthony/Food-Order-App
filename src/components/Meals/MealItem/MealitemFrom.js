import { useContext } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import CartContext from "../../../store/cart-context";

const MealItemForm = (props) => {
  const ctx = useContext(CartContext);
  const AddToCartHandler = (event) => {
    event.preventDefault();
    ctx.onAddCart(["helle"]);
  };

  return (
    <form onSubmit={AddToCartHandler} className={classes.form}>
      <Input
        label={"Amount"}
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
    </form>
  );
};

export default MealItemForm;
