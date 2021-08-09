import React from "react";
import classes from "./ProgramDescription.module.css";

import HeaderTitleText from "../../Text/HeaderTitleText/HeaderTitleText";
import SingleProgramElement from "./SingleProgramElement/SingleProgramElement";

import checklistIcon from "../../../assets/icons/checklist.png";
import yogaIcon from "../../../assets/icons/yoga.png";
import runningIcon from "../../../assets/icons/running.png";
import appleIcon from "../../../assets/icons/apple.png";
import whistleIcon from "../../../assets/icons/whistle.png";
import healthWatchIcon from "../../../assets/icons/health-watch.png";
import bookIcon from "../../../assets/icons/book.png";

// Program Description component allows us to render customisable single program elements, where we can set different icon, texts.
const ProgramDescription = () => {
  return (
    <div className={classes.outerContainer}>
      <HeaderTitleText>What's in my program?</HeaderTitleText>
      <div className={classes.programDescriptionElementsContainer}>
        <SingleProgramElement
          iconSrc={checklistIcon}
          headlineText={"A personalized yoga program"}
          regularText={"Completely safe and focused on your key goals"}
        />
        <SingleProgramElement
          iconSrc={yogaIcon}
          headlineText={"Easy & enjoyable yoga workouts for your level"}
          regularText={"Program adjusts to your level and pace"}
        />
        <SingleProgramElement
          iconSrc={runningIcon}
          headlineText={"No special preparation needed"}
          regularText={
            "Perfect for begginners! Requires no special preparation or equipment"
          }
        />
        <SingleProgramElement
          iconSrc={appleIcon}
          headlineText={"Daily motivation & accountability"}
          regularText={
            "Track your progress, develop a healthy routine, reach goals faster"
          }
        />
        <SingleProgramElement
          iconSrc={whistleIcon}
          headlineText={"Browse from various yoga challenger"}
          regularText={
            "30 d morning yoga, mindful yoga, back flexibility challenge and more!"
          }
        />
        <SingleProgramElement
          iconSrc={healthWatchIcon}
          headlineText={"Easy access on any device"}
          regularText={"Do your yoga anywhere across all types of devices"}
        />
        <SingleProgramElement
          iconSrc={bookIcon}
          headlineText={"A complete guide to get started"}
          regularText={
            "Best tips, guidelines, advice, and recommendations for successful practice"
          }
        />
      </div>
    </div>
  );
};

export default ProgramDescription;
