import { useRef, useState } from "react";
import styles from "./OrderForm.module.css";
const OrderForm = (props) => {
  const [userInfo, setUserInfo] = useState([]);

  const nameRef = useRef("");
  const surnameRef = useRef("");
  const addressRef = useRef("");
  const cityRef = useRef("");
  const codeRef = useRef(0);
  const emailRef = useRef("");

  const submitHandler = (e) => {
    e.preventDefault();
    setUserInfo({
      firstName: nameRef.current.value,
      surname: surnameRef.current.value,
      address: addressRef.current.value, // NON PRENDE DATI USER AL PRIMO SUBMIT (DA FIXARE)
      city: cityRef.current.value,
      code: codeRef.current.value,
      email: emailRef.current.value,
    });
    const mergedData = { ...props.orderList, ...{ userInfo } };

    async function addOrder() {
      const response = await fetch(
        "https://food-app-10c79-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
        {
          method: "POST",
          body: JSON.stringify(mergedData),
          headers: { "Content-type": "application/json" },
        }
      );
      const data = await response.json();
      console.log(data);
    }
    return addOrder();
  };

  return (
    <form className={styles.formContainer} onSubmit={submitHandler}>
      <div className={styles.inputContainer}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={nameRef} />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="surname">Surname</label>
        <input type="text" id="surname" ref={surnameRef} />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" ref={addressRef} />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityRef} />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="code">Code</label>
        <input type="number" id="code" ref={codeRef} />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" ref={emailRef} />
      </div>
      <div>
        <button>Cancel</button>
        <button type="submit">Order</button>
      </div>
    </form>
  );
};
export default OrderForm;
