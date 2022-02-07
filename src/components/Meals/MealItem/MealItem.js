import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
      <div>
        <MealItemForm
          id={props.id}
          tutto={props.tutto}
          orderList={props.orderList}
        />
      </div>
    </li>
  );
};

export default MealItem;
