import React from "react";

import { useStyles } from "../hooks/styled";

const styles = {
  button: {
    background: "palevioletred",
    color: "papayawhip",
    border: "none",
    minWidth: "400px",
    padding: "24px 16px"
  }
};

export const Button = ({ children }) => {
  const classes = useStyles(styles);

  return <button className={classes.button}>{children}</button>;
};
