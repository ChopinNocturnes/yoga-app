import React from "react";

import classes from "./PlanCard.module.css";

const PlanCard = ({
  months,
  monthlyPrice,
  discount,
  id,
  onCardClick,
  clickedCardId,
}) => {
  const cardIsClicked = id === clickedCardId;

  return (
    <div
      className={`${classes.planCard} ${
        cardIsClicked ? classes.cardBorderHighlighted : null
      }`}
      onClick={() => onCardClick(id)}
    >
      <div className={classes.planCardInfoContainer}>
        <div className={classes.monthPlanContainer}>
          <div className={classes.planDurationText}>{months} month plan</div>
          {discount && (
            <div className={classes.planCardDiscountBox}>Save {discount}%</div>
          )}
        </div>
        <div className={classes.monthlyPriceText}>
          <div className={classes.monthlyPriceText}>
            <span>${monthlyPrice}</span> / month
          </div>
        </div>
        <div className={classes.billInformationText}>
          {discount ? (
            <div>
              <del>${19.99 * months}</del>
              <span className={classes.highlightedText}>
                ${monthlyPrice * months}
              </span>{" "}
              billed every {months} months
            </div>
          ) : (
            <span className={classes.billInformationText}>Billed monthly</span>
          )}
        </div>
      </div>
      <div className={classes.planCardCheckboxContainer}>
        {cardIsClicked ? (
          <div className={`${classes.checkbox} ${classes.checkboxClicked}`}>
            <i className={`fas fa-check ${classes.checkmark}`}></i>
          </div>
        ) : (
          <div className={classes.checkbox}></div>
        )}
      </div>
    </div>
  );
};

export default PlanCard;
