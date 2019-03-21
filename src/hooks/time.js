import { useState } from "react";

import { useInterval } from "./interval.js";

export const useTime = () => {
  const [time, setTime] = useState(new Date());
  const updateTime = () => setTime(new Date());

  useInterval(updateTime, 1000);

  return time;
};
