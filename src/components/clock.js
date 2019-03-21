import React from "react";

import { useTime } from "../hooks/time";

const paddedTimePart = value => {
  const strValue = value.toString();
  return strValue.length > 1 ? strValue : `0${strValue}`;
};
const formatTime = time =>
  [
    paddedTimePart(time.getHours()),
    paddedTimePart(time.getMinutes()),
    paddedTimePart(time.getSeconds())
  ].join(":");

export const Clock = () => {
  const time = useTime();

  return formatTime(time);
};
