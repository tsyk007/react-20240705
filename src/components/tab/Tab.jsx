import classes from "./Tab.module.css";

const Tab = ({ isActive, name, onClick }) => {
  return (
    <button className={isActive ? classes.isActive : ""} onClick={onClick}>
      {name}
    </button>
  );
};

export default Tab;
