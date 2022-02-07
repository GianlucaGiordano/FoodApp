import React from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((ref, props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.id}>Amount</label>
      <input id={props.id} ref={ref} />
    </div>
  );
});

export default Input;
