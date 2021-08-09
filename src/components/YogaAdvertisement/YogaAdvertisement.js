import React from "react";

import classes from "./YogaAdvertisement.module.css";

import YogaChecklists from "./YogaChecklists/YogaChecklists";
import YogaAppPreview from "./YogaAppPreview/YogaAppPreview";

const YogaAdvertisiment = () => {
  return (
    <div className={classes.outerContainer}>
      <YogaAppPreview />
      <YogaChecklists />
    </div>
  );
};

export default YogaAdvertisiment;
