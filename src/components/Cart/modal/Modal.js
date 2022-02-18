import React, { Fragment, useState } from "react";
import OrderList from "./OrderList";
import Button from "../../UI/Button";

import styles from "./Modal.module.css";
import OrderForm from "./OrderForm";

const Modal = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [orderSent, setOrderSent] = useState(false);

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

  async function addOrder(userInfo) {
    setLoading(true);
    const response = await fetch(
      "https://food-app-10c79-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({ ...props.orderList, ...{ userInfo } }),
        headers: { "Content-type": "application/json" },
      }
    );
    const data = await response.json();
    setLoading(false);
    setOrderSent(true);
    props.onWipe();
  }

  return (
    <>
      <div
        className={styles.backdrop}
        onClick={() => props.closeModal(false)}
      />

      <div className={styles.modal}>
        {loading === true ? (
          <p>Sending order ...</p>
        ) : orderSent === true ? (
          <div style={{ textAlign: "center" }}>
            <h3>Order Sent</h3>
            <Button onClick={() => props.closeModal(false)}>CLose</Button>
          </div>
        ) : (
          <>
            {mapOrder}

            <div className={styles.buttonContainer}>
              {!showForm && (
                <div>
                  <Button
                    style={{ marginRight: "2rem" }}
                    onClick={() => props.closeModal(false)}
                  >
                    Close
                  </Button>
                  {mapOrder.length > 0 && (
                    <Button onClick={() => setShowForm(true)}>Order</Button>
                  )}
                </div>
              )}

              <div>
                <h2>Total: {props.finalTotal.toFixed(2)}</h2>
              </div>
            </div>
            {showForm && <OrderForm onFetch={addOrder} />}
          </>
        )}
      </div>
    </>
  );
};
export default Modal;
