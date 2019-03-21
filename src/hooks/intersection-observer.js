import { useRef, useState, useEffect } from "react";

export const useIntersectionObserver = (root, target, options) => {
  const rootRef = useRef(null);
  const targetRef = useRef(null);
  const optionsRef = useRef(options);
};
