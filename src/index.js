import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import { Clock } from "./components/clock";
import { Slider } from "./components/slider";
import { Portal } from "./components/portal";
import { useToggle } from "./hooks/toggle";

function App() {
  const [open, toggleOpen] = useToggle();
  const portalRef = useRef();
  const togglePortal = () => {
    toggleOpen();
    open ? portalRef.current.close() : portalRef.current.open();
  };

  return (
    <>
      <Clock />
      <Slider />
      <Portal ref={portalRef}>
        <div>
          <h2>Portal</h2>
          <p>Hello World</p>
        </div>
      </Portal>
      <button onClick={togglePortal}>Toggle Portal</button>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
