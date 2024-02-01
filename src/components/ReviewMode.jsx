import React from "react";
import questions from "./questions";
import "./css/ReviewMode.css";

function ReviewMode({ setReviewMode, userAnswers }) {
    return (
        <div className="Review">
            <div className="review--head">
                <button className="close-btn" onClick={() => setReviewMode(false)}>
                    <span class="material-symbols-outlined">
                        arrow_back
                    </span>
                </button>
                <h2 className="heading3">Review Mode</h2>
            </div>
            {questions.map(({ id, question, correctAnswer }, index) => {
                const userAnswer = userAnswers[index]?.answer;

                // Determine if the user's answer is correct
                const isCorrect = userAnswer === correctAnswer;

                // Apply conditional styling based on correctness
                const answerStyle = isCorrect ? "correct" : "incorrect";

                return (
                    <div className={`ans-box ${answerStyle}`} key={id}>
                        <p className="con">Q: {question}</p>
                        <p className="con">Correct Answer: <span className="c-ans">{correctAnswer}</span></p>
                        <p className="con">Your Answer: <span className={answerStyle}>{userAnswer || "Not answered"}</span></p>
                    </div>
                );
            })}
        </div>
    );
}

export default ReviewMode;
