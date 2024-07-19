import { useState } from "react";
import useCount from "./hooks/useCount.js";
import Counter from "./Counter.jsx";

const CounterContainer = ({ value, setValue, min, max, step = 1 }) => {
  const { increase, decrease } = useCount({ setValue, min, max, step });

  return <Counter value={value} increase={increase} decrease={decrease} />;
};

export default CounterContainer;
