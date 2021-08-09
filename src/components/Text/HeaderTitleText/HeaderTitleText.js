import React from "react";
import classes from "./HeaderTitleText.module.css";

const HeaderTitleText = (props) => {
  return (
    <div className={classes.headerTitleText}>
      {props.children}
    </div>
  );
};

export default HeaderTitleText;
