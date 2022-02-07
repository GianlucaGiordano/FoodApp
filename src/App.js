import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Modal from "./components/Cart/Modal";
import React, { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [orderList, setOrderList] = useState([]);

  const updateCounter = (id, name, amount, price, description) => {
    setOrderList((prevState) => {
      return [
        ...prevState,
        {
          id: id,
          name: name,
          price: price,
          amount: amount === "aggiungi" ? 1 : -1,
          description: description,
        },
      ];
    });
  };

  const orderHandler = (order) => {
    setOrderList((prev) => {
      return [...prev, order];
    });
  };

  const modalHandler = () => {
    setShowModal(!showModal);
  };

  const filteredOrder = orderList.filter((order) => order.length !== 0);

  const filteredOrderList = Object.values(
    [...filteredOrder].reduce(
      (acc, { id, amount, name, price, description }) => {
        acc[id] = {
          id,
          amount: (acc[id] ? acc[id].amount : 0) + amount,
          name,
          price,
          description,
        };
        return acc;
      },
      {}
    )
  );

  const amountTotal = filteredOrderList
    .map((food) => {
      return food.amount;
    })
    .reduce((a, b) => a + b, 0);

  const finalTotal = filteredOrderList
    .map((food) => {
      return food.amount * +food.price;
    })
    .reduce((a, b) => a + b, 0);

  const deleteOrder = (key) => {
    setOrderList((prev) => {
      const updatedOrder = prev.filter((item) => item.id !== key);
      return updatedOrder;
    });
  };

  return (
    <>
      {showModal ? (
        <Modal
          closeModal={modalHandler}
          orderList={filteredOrderList}
          updateCounter={updateCounter}
          finalTotal={finalTotal}
          deleteOrder={deleteOrder}
        />
      ) : (
        ""
      )}

      <Header showModal={modalHandler} amountTotal={amountTotal} />
      <main>
        <Meals orderList={orderHandler} />
      </main>
    </>
  );
}

export default App;
