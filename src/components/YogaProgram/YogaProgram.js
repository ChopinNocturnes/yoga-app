import React from "react";
import classes from "./YogaProgram.module.css";

import OrderedPlans from "./OrderedPlans/OrderedPlans";
import PlanSelection from "./PlanSelection/PlanSelection";
import ProgramDescription from "./ProgramDescription/ProgramDescription";

// YogaProgram component allows to show or not to show ordered plans component, ordered plans number must be given. Also custom headline title can be shown. 
// This allows to reuse this component at the end of our project.
const YogaProgram = ({ orderedPlans, mainHeadline, headlineText }) => {
  return (
    <div className={classes.outerContainer}>
      {orderedPlans && <OrderedPlans orderedPlans={orderedPlans} />}
      <h1
        className={
          mainHeadline
            ? classes.mainHeadlineText
            : classes.secondaryHeadlineText
        }
      >
        {headlineText}
      </h1>
      <div className={classes.planFlexContainer}>
        <PlanSelection />
        <ProgramDescription />
      </div>
    </div>
  );
};

export default YogaProgram;
