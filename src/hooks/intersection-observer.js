import { useRef, useState, useEffect } from "react";

export const useIntersectionObserver = (root, target, options) => {
  const rootRef = useRef(null);
  const targetRef = useRef(null);
  const optionsRef = useRef(options);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    rootRef.current = root;
    targetRef.current = target;
    optionsRef.current = options;
  });

  useEffect(() => {
    const currentRoot = rootRef.current;
    const currentTarget = targetRef.current;

    if (!currentRoot || !currentTarget) return;

    const observer = new IntersectionObserver(
      entries => {
        setIntersecting(entries.some(entry => entry.isIntersecting));
      },
      {
        ...optionsRef.current,
        root: currentRoot
      }
    );

    observer.observe(currentTarget);
    return () => observer.unobserve(currentTarget);
  });

  return isIntersecting;
};
