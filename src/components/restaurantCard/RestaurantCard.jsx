import Counter from "../counter/Counter.jsx";
import {
  maxDishCounterValue,
  minDishCounterValue,
} from "../../constants/constants.js";

const RestaurantCard = ({ restaurant }) => {
  if (!restaurant) return null;

  return (
    <div>
      <h1>{restaurant.name}</h1>
      <h3>Меню</h3>
      <ul>
        {restaurant?.menu.length > 0
          ? restaurant.menu.map((item, index) => (
              <li key={`${restaurant.name}_menu_${index}`}>
                <span>{item.name}</span>
                <Counter min={minDishCounterValue} max={maxDishCounterValue} />
              </li>
            ))
          : null}
      </ul>
      <h3>Отзывы</h3>
      <ul>
        {restaurant?.reviews.length > 0
          ? restaurant.reviews.map((item, index) => (
              <li key={`${restaurant.name}reviews${index}`}>{item.text}</li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default RestaurantCard;
