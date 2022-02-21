import { useState } from "react";
import Button from "../../UI/Button";
import styles from "./OrderForm.module.css";
const OrderForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [code, setCode] = useState(0);

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      firstName.trim().length > 0 &&
      address.trim().length > 0 &&
      city.trim().length > 0 &&
      code.trim().length >= 5
    ) {
      props.onFetch({
        firstName: firstName,
        address: address,
        city: city,
        code: code,
      });
    }
  };

  return (
    <form className={styles.formContainer} onSubmit={submitHandler}>
      <div className={styles.inputContainer}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          required
          onChange={(e) => setFirstName(e.target.value)}
          onInvalid={(e) => e.target.setCustomValidity("Insert a valid Name")}
          onInput={(e) => e.target.setCustomValidity("")}
        />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          required
          onChange={(e) => setAddress(e.target.value)}
          onInvalid={(e) =>
            e.target.setCustomValidity("Insert a valid Address")
          }
          onInput={(e) => e.target.setCustomValidity("")}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          required
          onChange={(e) => setCity(e.target.value)}
          onInvalid={(e) => e.target.setCustomValidity("Insert a valid City")}
          onInput={(e) => e.target.setCustomValidity("")}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="code">Postal Code</label>
        <input
          type="text"
          id="code"
          minLength="5"
          required
          onChange={(e) => setCode(e.target.value)}
          onInvalid={(e) =>
            e.target.setCustomValidity("Insert five numebr minimum")
          }
          onInput={(e) => e.target.setCustomValidity("")}
        />
      </div>

      <div style={{ paddingTop: "2rem" }}>
        <Button
          style={{ marginRight: "2rem" }}
          onClick={() => props.closeModal(false)}
        >
          Cancel
        </Button>
        <Button type="submit">Invia</Button>
      </div>
    </form>
  );
};
export default OrderForm;
