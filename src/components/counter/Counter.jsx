import { useState } from "react";
import classes from "./Counter.module.css";

const Counter = ({ min, max }) => {
  const [value, setValue] = useState(min);

  const increase = () => {
    setValue((prev) => (prev + 1 > max ? prev : prev + 1));
  };

  const decrease = () => {
    setValue((prev) => (prev - 1 < min ? prev : prev - 1));
  };

  return (
    <div className={classes.counter}>
      <button onClick={decrease}>-</button>
      <span>{value}</span>
      <button onClick={increase}>+</button>
    </div>
  );
};

export default Counter;
