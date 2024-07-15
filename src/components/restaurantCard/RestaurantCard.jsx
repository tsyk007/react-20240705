import Counter from "../counter/Counter.jsx";
import {
  maxDishCounterValue,
  minDishCounterValue,
} from "../../constants/constants.js";

const RestaurantCard = ({ element }) => {
  if (!element) return null;

  return (
    <div>
      <h1>{element.name}</h1>
      <h3>Меню</h3>
      <ul>
        {element?.menu.length > 0
          ? element.menu.map((item, index) => (
              <li key={`${element.name}_menu_${index}`}>
                <span>{item.name}</span>
                <Counter min={minDishCounterValue} max={maxDishCounterValue} />
              </li>
            ))
          : null}
      </ul>
      <h3>Отзывы</h3>
      <ul>
        {element?.reviews.length > 0
          ? element.reviews.map((item, index) => (
              <li key={`${element.name}reviews${index}`}>{item.text}</li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default RestaurantCard;
