import { useState } from "react";
import useCount from "./hooks/useCount.js";
import Counter from "./Counter.jsx";

const CounterContainer = ({ min, max, step = 1 }) => {
  const { increase, decrease, value } = useCount({ min, max, step });

  return <Counter value={value} increase={increase} decrease={decrease} />;
};

export default CounterContainer;
