import styles from "./Button.module.css";
const button = (props) => {
  return (
    <button
      className={styles.button}
      onClick={props.onClick}
      disabled={props.disabled}
      style={props.style}
      id={props.id}
    >
      {props.children}
    </button>
  );
};
export default button;
