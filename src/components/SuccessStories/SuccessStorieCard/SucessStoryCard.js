import React from "react";

import classes from "./SucessStoryCard.module.css";

const SucessStoryCard = ({ pictureSrc, name, age, location, rating, children }) => {
  let ratingRenderElement = [];

    for (let i = 0; i < rating; i++) {
      ratingRenderElement.push(<i key={new Date().getTime() * Math.random()} className={`fas fa-star ${classes.goldenStar}`}></i>)
    }

    if (rating < 5) {
      for (let i = 0; i < 5 - rating; i++) {
        ratingRenderElement.push(<i key={new Date().getTime() * Math.random()} className={`far fa-star ${classes.blankStar}`}></i>)
      }
    }


  return (
    <div className={`${classes.successStoryCard} slide`}>
      <span className={classes.nameAgeText}>
        {name}, {age}
      </span>
      <span className={classes.locationText}>{location}</span>
      <div className={classes.ratingContainer}>
        {ratingRenderElement}
      </div>
      <img
          src={pictureSrc}
          alt="User"
          className={classes.userImage}
        />
      <p className={classes.reviewText}>{children}</p>
    </div>
  );
};

export default SucessStoryCard;
