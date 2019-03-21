import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { createPortal } from "react-dom";

export const usePortal = () => {
  const portalRef = useRef();

  useEffect(() => {
    portalRef.current = document.createElement("div");
  }, []);

  useLayoutEffect(() => {
    const portal = portalRef.current;
    if (!portal) return;
    document.body.appendChild(portal);
    return () => document.body.removeChild(portal);
  });

  return {
    open: children => createPortal(children, portalRef.current),
    close: () => document.body.removeChild(portalRef.current)
  };
};
