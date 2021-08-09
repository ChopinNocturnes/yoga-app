import React from 'react';

import classes from './FrequentlyAskedQuestion.module.css'

const FrequentlyAskedQuestion = ({ onQuestionClick, questionId, activeQuestion, questionText, children }) => {
  return (
    <div className={classes.frequentlyAskedQuestion}>
      <div
        className={classes.headerContainer} 
        onClick={() => onQuestionClick(questionId)}
      >
        <span className={classes.questionText}>{questionText}</span>
        {activeQuestion === questionId ? <i className={`fas fa-chevron-up ${classes.openCloseIcon}`}></i> : <i className={`fas fa-chevron-down ${classes.openCloseIcon}`}></i>}
      </div>
      {activeQuestion === questionId && <p className={classes.answerText}>{children}</p>}
    </div>
  );
};

export default FrequentlyAskedQuestion;