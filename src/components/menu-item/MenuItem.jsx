import CounterContainer from "../counter/CounterContainer.jsx";
import {
  maxDishCounterValue,
  minDishCounterValue,
} from "../../constants/constants.js";
import { useState } from "react";

const MenuItem = ({ menuItem }) => {
  const [counterValue, setCounterValue] = useState(minDishCounterValue);
  return (
    <div>
      <span>{menuItem.name}</span>
      <CounterContainer
        min={minDishCounterValue}
        max={maxDishCounterValue}
        value={counterValue}
        setValue={setCounterValue}
      />
    </div>
  );
};

export default MenuItem;
