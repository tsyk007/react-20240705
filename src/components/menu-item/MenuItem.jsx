import CounterContainer from "../counter/CounterContainer.jsx";
import {
  maxDishCounterValue,
  minDishCounterValue,
} from "../../constants/constants.js";

const MenuItem = ({ menuItem }) => {
  return (
    <div>
      <span>{menuItem.name}</span>
      <CounterContainer min={minDishCounterValue} max={maxDishCounterValue} />
    </div>
  );
};

export default MenuItem;
