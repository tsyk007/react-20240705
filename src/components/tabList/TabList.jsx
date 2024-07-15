import Tab from "../tab/Tab.jsx";
import classes from "./TabList.module.css";

const TabList = ({ items, activeIndex, setActiveIndex }) => {
  if (!items?.length) return null;

  return (
    <div className={classes.container}>
      {items.map((item, i) => (
        <Tab
          key={i}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          tabIndex={i}
          name={item.name}
        />
      ))}
    </div>
  );
};

export default TabList;
