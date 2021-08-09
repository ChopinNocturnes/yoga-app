import React, { useState } from "react";
import classes from "./PlanCards.module.css";

import PlanCard from "./PlanCard/PlanCard";
import OrderButton from "../../UI/OrderButton/OrderButton";

// Plan Cards component allows use to render customisable plan selection components where we can set duration, price and discount. If discount is set additional
// html elements will be rendered.
const PlanCards = () => {
  const [clickedCardId, setClickedCardId] = useState(0);

  const cardIsClicked = (cardId) => {
    setClickedCardId(cardId);
  };

  return (
    <div className={classes.outerContainer}>
      <PlanCard
        months={6}
        monthlyPrice={9.99}
        discount={50}
        id={0}
        onCardClick={cardIsClicked}
        clickedCardId={clickedCardId}
      />
      <PlanCard
        months={3}
        monthlyPrice={14.99}
        discount={25}
        id={1}
        onCardClick={cardIsClicked}
        clickedCardId={clickedCardId}
      />
      <PlanCard
        months={6}
        monthlyPrice={19.99}
        id={2}
        onCardClick={cardIsClicked}
        clickedCardId={clickedCardId}
      />
      <OrderButton
        text={"Get your plan"}
        onClick={() => console.log(clickedCardId)}
      />
    </div>
  );
};

export default PlanCards;
