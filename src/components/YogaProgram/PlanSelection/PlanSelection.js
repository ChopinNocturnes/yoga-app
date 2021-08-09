import React from "react";
import classes from "./PlanSelection.module.css";

import PlanCards from "../PlanCards/PlanCards";
import HeaderTitleText from "../../Text/HeaderTitleText/HeaderTitleText";
import safeCheckoutIcon from "../../../assets/icons/safe-checkout.png"

const PlanSelection = () => {
  return (
    <div className={classes.outerContainer}>
      <div className={classes.planSelectionMainText}>
        <div className={classes.headerTitleText}>
          <HeaderTitleText>
            Choose your plan and get{" "}
            <span className={classes.orangeTextColor}>7 days free trial</span>
          </HeaderTitleText>
        </div>
      </div>
      <PlanCards />
      <p className={classes.infoText}>
        Your free trial will automatically become a paid subscription on the 8th
        day after you begin your trial. To cancel your subscription, please
        contact us at least 24 hours before the end of the trial period.
      </p>
      <p className={classes.infoText}>
        By choosing a payment method you agree to the <a href="/">T&Cs</a> and <a href="/">Privacy Policy</a> 
      </p>
      <img
          src={safeCheckoutIcon}
          alt="Safe checkout icon"
        />
    </div>
  );
};

export default PlanSelection;
