import { restaurants } from "../../constants/mock.js";
import React, { useState } from "react";
import Layout from "../layout/Layout.jsx";
import RestaurantCard from "../restaurantCard/RestaurantCard.jsx";
import TabList from "../tabList/TabList.jsx";

const App = () => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

  return (
    <Layout>
      <TabList
        items={restaurants}
        activeIndex={activeRestaurantIndex}
        setActiveIndex={setActiveRestaurantIndex}
      />
      <RestaurantCard restaurant={restaurants[activeRestaurantIndex]} />
    </Layout>
  );
};

export default App;
