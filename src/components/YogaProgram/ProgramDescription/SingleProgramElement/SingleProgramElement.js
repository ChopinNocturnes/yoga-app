import React from "react";

import classes from "./SingleProgramElement.module.css";

const SingleProgramElement = ({ iconSrc, headlineText, regularText }) => {
  return (
    <div className={classes.singleProgramElement}>
      <img
        src={iconSrc}
        alt="Program element icon"
      />
      <div className={classes.singleProgramElementInfoContainer}>
        <span className={classes.headlineText}>{headlineText}</span>
        <p className={classes.regularText}>{regularText}</p>
      </div>
    </div>
  );
};

export default SingleProgramElement;
