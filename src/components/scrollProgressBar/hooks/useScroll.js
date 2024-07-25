import { useEffect, useState } from "react";
import { calculateScrollPercent } from "../utils/calculateScrollPercent.js";
import { throttle } from "throttle-debounce";

export const useScroll = () => {
  const [percent, setPercent] = useState("0%");
  useEffect(() => {
    const handler = throttle(15, () => {
      setPercent(calculateScrollPercent());
    });
    addEventListener("scroll", handler);
    return () => removeEventListener("scroll", handler);
  }, []);
  return { percent };
};
