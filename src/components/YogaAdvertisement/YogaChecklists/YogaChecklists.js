import React from "react";

import classes from "./YogaChecklists.module.css";

import HeaderTitleText from "../../Text/HeaderTitleText/HeaderTitleText";
import YogaChecklist from "../YogaChecklist/YogaChecklist";

// Yoga Checlists component allows us to render checklist component with custom text.
const YogaChecklists = () => {
  return (
    <div className={classes.outerContainer}>
      <HeaderTitleText>Is Positive Yoga right for me?</HeaderTitleText>
      <div className={classes.checklistContainer}>
        <YogaChecklist
          text={"Each program adapts to your age or fitness level"}
        />
        <YogaChecklist text={"Mindful way to exercise and get real results"} />
        <YogaChecklist text={"Effective and long-term lasting results"} />
        <YogaChecklist
          text={"Suited activities that benefit both the mind and body"}
        />
        <YogaChecklist text={"Low-intensity but highly-effective workouts"} />
        <YogaChecklist
          text={"Extra attention to muscle, joint and back health"}
        />
      </div>
    </div>
  );
};

export default YogaChecklists;
