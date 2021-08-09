import React, { Fragment } from "react";

import classes from "./SuccessStories.module.css";

import HeaderTitleText from "../Text/HeaderTitleText/HeaderTitleText";
import SucessStoryCard from "./SuccessStorieCard/SucessStoryCard";
import OrderButton from "../UI/OrderButton/OrderButton";

import customerOnePicture from "../../assets/pictures/1.png";
import customerTwoPicture from "../../assets/pictures/2.png";
import customerThreePicture from "../../assets/pictures/3.png";

// We generate our success story cards by using customisable success story card component, where we cant set custom picture, name, age, location, rating and text.
const successStoryCards = (
  <Fragment>
    <SucessStoryCard
      pictureSrc={customerOnePicture}
      name={"Emily"}
      age={28}
      location={"Delaware, NJ"}
      rating={5}
    >
      I have been using this program for 3 months now and It helped me to lose
      16lbs, taught me how to breathe properly and now I look forward to my
      workout. Great challenges for different problem zones. Definitely
      recommend to anyone that wants to lose weight and feel better without long
      hour at the gym or exhausting workouts.
    </SucessStoryCard>
    <SucessStoryCard
      pictureSrc={customerTwoPicture}
      name={"Kylie"}
      age={40}
      location={"Los Angeles"}
      rating={5}
    >
      I will be very straightforward - I hate sports and working out.
      <b> Positive Yoga </b> put my physical activity to the next level. I
      started to enjoy my morning yoga routines where I get my dose of cardio,
      resistance, and stretching in one place. I could barely hold a plank at
      the beginning. Now I’m doing various yoga poses that looked impossible at
      first. My body shape improved a lot and I am very motivated by both:
      results and the feeling of progress.
    </SucessStoryCard>
    <SucessStoryCard
      pictureSrc={customerThreePicture}
      name={"Jesica"}
      age={51}
      location={"San Fancisco, CA"}
      rating={5}
    >
      I have many friends who practice yoga and I decided to try it myself. It
      is the best decision I have made in a long time. With{" "}
      <b> Positive Yoga </b>
      program I started to lose weight, which was demotivating me for a long
      time. Also, I’ve learned about yoga philosophy and poses that encourage me
      to practice mindfulness and pay attention to stress reduction. I am very
      proud of myself. Feeling better is my biggest motivation.
    </SucessStoryCard>
  </Fragment>
);

const SuccessStories = () => {
  return (
    <Fragment>
      <div className={classes.outerContainer}>
        <HeaderTitleText>Hear success stories from our clients</HeaderTitleText>
        <div className={classes.storiesContainer}>{successStoryCards}</div>
        <OrderButton
          text={"Get my plan"}
          onClick={() => console.log("Order a plan")}
          secondaryButton
        />
      </div>
    </Fragment>
  );
};

export default SuccessStories;
