import React, { useState } from "react";

import classes from "./FrequentlyAskedQuestions.module.css";

import HeaderTitleText from "../Text/HeaderTitleText/HeaderTitleText";
import FrequentlyAskedQuestion from "./FrequentlyAskedQuestion/FrequentlyAskedQuestion";
import OrderButton from "../UI/OrderButton/OrderButton";

// This component generates our frequently asked questions by using customisable components, where we can set question and answer texts. Also we use state to set which question is open or not.
const FrequentlyAskedQuestions = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const onQuestionClick = (questionId) => {
    questionId === activeQuestion
      ? setActiveQuestion(null)
      : setActiveQuestion(questionId);
  };

  return (
    <div className={classes.outerContainer}>
      <HeaderTitleText>Frequently Asked Questions</HeaderTitleText>
      <FrequentlyAskedQuestion
        onQuestionClick={onQuestionClick}
        questionId={0}
        activeQuestion={activeQuestion}
        questionText={"What happens after I order?"}
      >
        After you place your order, we get to work! <br /> Based on the
        questions you answered in the quiz, we’ll craft your personal plan to
        your level with recomendations on how to improve.
      </FrequentlyAskedQuestion>
      <FrequentlyAskedQuestion
        onQuestionClick={onQuestionClick}
        questionId={1}
        activeQuestion={activeQuestion}
        questionText={"Where I can access my plan?"}
      >
        Your plan will be accessible in <b>Positive Yoga's</b> web app with a
        special link generated after your purchase.
      </FrequentlyAskedQuestion>
      <FrequentlyAskedQuestion
        onQuestionClick={onQuestionClick}
        questionId={2}
        activeQuestion={activeQuestion}
        questionText={"How can I cancel my subscription?"}
      >
        You can manage or cancel your subscription by writing our customer
        support hello@positiveyoga.app
      </FrequentlyAskedQuestion>
      <FrequentlyAskedQuestion
        onQuestionClick={onQuestionClick}
        questionId={3}
        activeQuestion={activeQuestion}
        questionText={"Why this program is paid?"}
      >
        We are aiming to offer our clients the best experience, which comes with
        a lot of work. The entire yoga program is developed by our large team of
        experts that work long hours to prepare effective, trustworthy and
        enjoyable content and workouts that can help you to reach your goals.
        The program is also completely free of ads and is constantly being
        updated based on your feedback!
      </FrequentlyAskedQuestion>
      <OrderButton
        text={"Get my plan"}
        secondaryButton
        onClick={() => {
          console.log("Order Plan");
        }}
      />
    </div>
  );
};

export default FrequentlyAskedQuestions;
