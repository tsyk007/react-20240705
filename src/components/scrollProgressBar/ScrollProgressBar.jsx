import classes from "./ScrollProgressBar.module.css";
import { useScroll } from "./hooks/useScroll.js";

export const ScrollProgressBar = () => {
  const { percent } = useScroll();

  return <div style={{ width: percent }} className={classes.progressBar} />;
};
