import React, { useState } from 'react';
import "./css/Result.css"
import ReviewMode from './ReviewMode';

function Result({ userName, score, totalQuestions, setShowQuiz, setUserName,userAnswers }) {
 const [reviewMode, setReviewMode] = useState(false)

 function handelRestart() {
  setShowQuiz(false)
  setUserName('')
  window.location.reload()
 }

 function handelReview() {
  setReviewMode(true)
 }

 const resultMessage = () => {
  if (score < 4) {
   return "Better luck next time!";
  } else if (score === totalQuestions) {
   return "Excellent! Perfect Score!";
  } else if (score >= 8) {
   return "Excellent!";
  } else if (score >= 5) {
   return "Good job! Can be better.";
  } else {
   return "Better luck next time!";
  }
 };

 return (
  <div>
   {!reviewMode ? (<div className="Result">
    <div className="result-box">
     <p className='prompt'>{resultMessage()}
      <span className='bold'> {userName}, </span>
      your score is
      <span className='bold'> : {score} / {totalQuestions} </span>
     </p>
    </div>
    <button onClick={() => handelReview()} className="restart-btn">Rewiew mode</button>
    <button className='restart-btn' onClick={() => handelRestart()}>
     Retake quiz</button>
   </div>) : (<ReviewMode userAnswers={userAnswers} setReviewMode={setReviewMode} />)}
  </div>
 )
}
export default Result