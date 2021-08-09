import React, { useState, useEffect } from "react";
import classes from "./DiscountBar.module.css";

// This function calculates time in hours, minutes and seconds till the end of discount.
const calculateTimeLeftTillDiscountEnds = (discountTime) => {
  let timeLeft = {
    hours: "00",
    minutes: "00",
    seconds: "00",
  };

  if (discountTime > 0) {
    const hours = Math.floor((discountTime / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((discountTime / 1000 / 60) % 60);
    const seconds = Math.floor((discountTime / 1000) % 60);

    timeLeft = {
      hours: hours < 10 ? `0${hours}` : hours,
      minutes: minutes < 10 ? `0${minutes}` : minutes,
      seconds: seconds < 10 ? `0${seconds}` : seconds,
    };
  }

  return timeLeft;
};

const DiscountBar = ({ discountTimeInMiliseconds }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeftTillDiscountEnds());
  const [discountTime, setdiscountTime] = useState(discountTimeInMiliseconds);

  // useEffect hook with interval for discount timer.
  useEffect(() => {
    const interval = setInterval(() => {
      setdiscountTime((p) => p - 1000);
      setTimeLeft(calculateTimeLeftTillDiscountEnds(discountTime));
    }, 1000);
    return () => clearInterval(interval);
  });

  const timerRenderElement = (
    <span>
      <span>{timeLeft.hours}</span>:<span>{timeLeft.minutes}</span>:
      <span>{timeLeft.seconds}</span>
    </span>
  );

  return (
    <div className={classes.outerContainer}>
      <div
        className={classes.innerContainer}
        onClick={() => console.log("To Discount")}
      >
        <i className={`fas fa-tag ${classes.priceTagIcon}`}></i>
        <div className={classes.discountTextContainer}>
          50% discount only valid for {timerRenderElement}
        </div>
      </div>
    </div>
  );
};

export default DiscountBar;
