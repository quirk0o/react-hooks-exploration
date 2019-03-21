import React, { useRef, useEffect } from "react";
import { findDOMNode } from "react-dom";

import { useIntersectionObserver } from "../hooks/intersection-observer";

const SliderBox = ({ root }) => {
  const elRef = useRef();
  const isIntersecting = useIntersectionObserver(root, elRef.current, {
    threshold: 1.0
  });

  return (
    <div
      ref={elRef}
      style={{
        width: 100,
        height: 100,
        background: isIntersecting ? "palevioletred" : "papayawhip"
      }}
    />
  );
};

export const Slider = () => {
  const elRef = useRef();

  return (
    <div
      ref={elRef}
      style={{
        overflow: "scroll",
        height: 150,
        display: "flex",
        flexDirection: "column"
      }}
    >
      <SliderBox root={elRef.current} />
      <SliderBox root={elRef.current} />
      <SliderBox root={elRef.current} />
      <SliderBox root={elRef.current} />
      <SliderBox root={elRef.current} />
    </div>
  );
};
