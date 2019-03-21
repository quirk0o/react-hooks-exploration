import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import { Clock } from "./components/clock";

function App() {
  return <Clock />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
