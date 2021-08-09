import React from "react";

import classes from "./YogaAppPreview.module.css";

import HeaderTitleText from "../../Text/HeaderTitleText/HeaderTitleText";
import YogaAppPreview1Src from "../../../assets/pictures/appPreview1.png";
import YogaAppPreview2Src from "../../../assets/pictures/appPreview2.png";

const YogaAppPreview = () => {
  return (
    <div className={classes.outerContainer}>
      <HeaderTitleText>Start your yoga yourney now!</HeaderTitleText>
      <div className={classes.appPreviewContainer}>
        <div className={classes.upperTriangle} />
        <div className={classes.bottomTriangle} />
        <div className={classes.appImagesContainer}>
          <img
            src={YogaAppPreview1Src}
            alt="Yoga App Preview"
            className={classes.yogaAppPreview1}
          />
          <img
            src={YogaAppPreview2Src}
            alt="Yoga App Preview"
            className={classes.yogaAppPreview2}
          />
        </div>
      </div>
    </div>
  );
};

export default YogaAppPreview;
