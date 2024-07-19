import classes from "./Counter.module.css";

const Counter = ({ decrease, increase, value }) => {
  return (
    <div className={classes.counter}>
      <button onClick={decrease}>-</button>
      <span>{value}</span>
      <button onClick={increase}>+</button>
    </div>
  );
};

export default Counter;
