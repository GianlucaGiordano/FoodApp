import styles from "./OrderList.module.css";
import React from "react";
import Button from "../../UI/Button";
import trash from "./outline_delete_outline_black_24dp.png";

const OrderList = (props) => {
  const incrementer = () => {
    props.updateCounter(
      props.id,
      props.name,
      "aggiungi",
      props.price,
      props.description
    );
  };
  const decrementer = () => {
    props.updateCounter(
      props.id,
      props.name,
      "diminuisci",
      props.price,
      props.description
    );
  };

  return (
    <div className={styles.listContainer}>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p className={styles.price}>{props.price}</p>
      <div className={styles.amountContainer}>
        <Button
          id={props.id}
          style={{ width: "2rem", height: "2rem", padding: "0" }}
          onClick={incrementer}
        >
          +
        </Button>
        <p>{props.amount} </p>

        <Button
          id={props.id}
          style={{ width: "2rem", height: "2rem", padding: "0" }}
          onClick={decrementer}
          disabled={props.amount === 1 ? true : false}
        >
          -
        </Button>

        <img
          className={styles.trash}
          src={trash}
          alt="trash img"
          onClick={() => props.deleteOrder(props.id)}
        />
      </div>
    </div>
  );
};
export default OrderList;
