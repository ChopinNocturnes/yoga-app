import React from "react";
import classes from "./OrderedPlans.module.css";

const OrderedPlans = ({ orderedPlans }) => {
  return (
    <div className={classes.orderedPlans}>
      Over <b>{orderedPlans}</b> plans ordered.
    </div>
  );
};

export default OrderedPlans;
