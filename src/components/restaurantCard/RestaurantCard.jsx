import Menu from "../menu/Menu.jsx";
import Reviews from "../reviews/Reviews.jsx";

const RestaurantCard = ({ restaurant }) => {
  if (!restaurant) return null;

  return (
    <div>
      <h1>{restaurant.name}</h1>
      <h3>Меню</h3>
      <Menu menuItems={restaurant.menu} />
      <Reviews reviewItems={restaurant.reviews} />
    </div>
  );
};

export default RestaurantCard;
