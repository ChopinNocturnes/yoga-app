import React from "react";

import classes from "./OrderButon.module.css";

const OrderButton = ({ text, onClick, secondaryButton = null }) => {
  return <button className={`${classes.orderButton} ${secondaryButton && classes.secondaryButton}`} onClick={onClick}>{text}</button>;
};

export default OrderButton;
