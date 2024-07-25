import classes from "./ScrollProgressBar.module.css";
import { useScroll } from "./hooks/useScroll.js";
import { useMemo } from "react";

export const ScrollProgressBar = () => {
  const { percent } = useScroll();

  const widthStyles = useMemo(() => ({ width: percent }), [percent]);

  return <div style={widthStyles} className={classes.progressBar} />;
};
