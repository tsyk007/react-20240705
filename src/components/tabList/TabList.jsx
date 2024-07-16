import Tab from "../tab/Tab.jsx";
import classes from "./TabList.module.css";

const TabList = ({ items, activeIndex, setActiveIndex }) => {
  if (!items?.length) return null;

  const setActive = (tabIndex) => {
    const isActive = tabIndex === activeIndex;
    if (!isActive) {
      setActiveIndex(tabIndex);
    }
  };

  return (
    <div className={classes.container}>
      {items.map((item, i) => (
        <Tab
          key={i}
          isActive={i === activeIndex}
          onClick={() => setActive(i)}
          name={item.name}
        />
      ))}
    </div>
  );
};

export default TabList;
