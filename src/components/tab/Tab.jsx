import classes from "./Tab.module.css";

const Tab = ({ activeIndex, setActiveIndex, tabIndex, name }) => {
  const isActive = activeIndex === tabIndex;

  const setActive = () => {
    if (!isActive) {
      setActiveIndex(tabIndex);
    }
  };

  return (
    <button className={isActive ? classes.isActive : ""} onClick={setActive}>
      {name}
    </button>
  );
};

export default Tab;
