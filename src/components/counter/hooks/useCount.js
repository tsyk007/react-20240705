import { useState } from "react";

const useCount = ({ min, max, step = 1 }) => {
  const [value, setValue] = useState(min);

  const increase = () => {
    setValue((prev) => (prev + step > max ? max : prev + step));
  };

  const decrease = () => {
    setValue((prev) => (prev - step < min ? min : prev - step));
  };

  return { value, increase, decrease };
};

export default useCount;
