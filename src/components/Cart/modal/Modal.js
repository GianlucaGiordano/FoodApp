import React from "react";
import OrderList from "./OrderList";
import Button from "../../UI/Button";

import styles from "./Modal.module.css";
import OrderForm from "./OrderForm";

const Modal = (props) => {
  const mapOrder = props.orderList.map((food) => {
    return (
      <OrderList
        key={food.id}
        id={food.id}
        name={food.name}
        description={food.description}
        amount={food.amount}
        price={food.price}
        updateCounter={props.updateCounter}
        deleteOrder={props.deleteOrder}
      />
    );
  });

  return (
    <>
      <div
        className={styles.backdrop}
        onClick={() => props.closeModal(false)}
      />
      <div className={styles.modal}>
        {mapOrder}

        <OrderForm orderList={props.orderList} />

        <div className={styles.buttonContainer}>
          <div>
            <Button
              style={{ marginRight: "2rem" }}
              onClick={() => props.closeModal(false)}
            >
              Close
            </Button>
            <Button>Order</Button>
          </div>

          <h2>Total: {props.finalTotal.toFixed(2)}</h2>
        </div>
      </div>
    </>
  );
};
export default Modal;
