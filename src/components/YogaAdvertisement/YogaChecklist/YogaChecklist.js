import React from "react";

import classes from "./YogaChecklist.module.css";

const YogaChecklist = ({ text }) => {
  return (
    <div className={classes.outerContainer}>
      <i className={`far fa-check-circle ${classes.checklistIcon}`}></i>
      <p className={classes.checklistText}>{text}</p>
    </div>
  );
};

export default YogaChecklist;
