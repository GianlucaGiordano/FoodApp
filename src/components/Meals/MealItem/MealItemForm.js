import { useEffect, useState } from "react";
import Button from "../../UI/Button";

import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [newOrder, setNewOrder] = useState([]);
  const [amount, setAmount] = useState(1);

  const submitHandler = (e) => {
    e.preventDefault();

    setNewOrder(() => {
      const order = {
        id: props.tutto.id,
        amount: amount,
        name: props.tutto.name,
        price: props.tutto.price,
        description: props.tutto.description,
      };

      return order;
    });
  };

  useEffect(() => {
    props.orderList(newOrder);
  }, [newOrder]);

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.input}>
        <label htmlFor={props.id}>Amount</label>
        <input
          type="number"
          id={props.id}
          onChange={(e) => setAmount(parseInt(e.target.value))}
          value={amount}
          min="1"
        />
      </div>
      <Button type="submit">+ Add</Button>
      {/* {<p>Please enter a valid amount (1-5).</p>} */}
    </form>
  );
};

export default MealItemForm;
