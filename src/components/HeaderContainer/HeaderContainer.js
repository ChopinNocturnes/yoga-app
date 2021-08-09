import React from "react";
import classes from "./HeaderContainer.module.css";

import headerIcon from "../../assets/icons/yoga-logo.png";

const HeaderContainer = () => {
  return (
    <div className={classes.outerContainer}>
      <div className={classes.innerContainer}>
        <img
          src={headerIcon}
          alt="Header yoga icon"
          className={classes.headerIcon}
        />
      </div>
    </div>
  );
};

export default HeaderContainer;
