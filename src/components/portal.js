import React, {
  useState,
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef
} from "react";

import { usePortal } from "../hooks/portal";

export const Portal = forwardRef(({ children }, ref) => {
  const { open, close } = usePortal();
  useImperativeHandle(ref, () => ({
    close,
    open: () =>
      open(
        <div
          style={{
            minWidth: 200,
            minHeight: 200,
            position: "absolute",
            top: "50%",
            left: "50%"
          }}
        >
          {children}
        </div>
      )
  }));

  return null;
});
