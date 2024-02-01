import React, { useState, useEffect } from 'react';
import questions from './questions';
import Result from './Result';
import "./css/Quiz.css";

const Quiz = ({ userName, setShowQuiz, setUserName }) => {
  // State variables
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [timer, setTimer] = useState(40);
  const [feedback, setFeedback] = useState(null); // New state for feedback

  // Function to handle user answers
  const handleAnswer = (selectedOption) => {
    const isCorrect = selectedOption === questions[currentQuestion].correctAnswer;

    // Update user answers
    setUserAnswers(prevAnswers => [...prevAnswers, { question: currentQuestion, answer: selectedOption }]);

    // Update score and feedback based on the selected option
    if (isCorrect) {
      setScore(score + 1);
      setFeedback('Correct!');
    } else {
      setFeedback('Incorrect. The correct answer is: ' + questions[currentQuestion].correctAnswer);
    }

    // Move to the next question or end the quiz
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  // Determine feedback class for styling
  const feedbackClass = feedback === 'Correct!' ? 'correct-ans' : 'incorrect-ans';

  // Effect for the timer
  useEffect(() => {
    // Start the timer when the component mounts
    const timerId = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          // Time's up, end the quiz
          setQuizCompleted(true);
          return 0;
        }
      });
    }, 1000);

    // Clean up the timer interval when the component unmounts or quiz is completed
    return () => clearInterval(timerId);
  }, [currentQuestion, quizCompleted]);

  // Calculate the progress percentage
  const progress = ((questions.length - currentQuestion) / questions.length) * 100;
  const timerProgress = (timer / 40) * 100;
  const formattedTimer = `${timer % 40 < 10 ? '0' : ''}${timer % 40}`;

  // Determine if time is less than or equal to 10 for styling
  const time = timer <= 10 ? "less" : "";

  return (
    <div>
      {!quizCompleted ? (
        // Quiz in progress
        <div className='Quiz'>
          <div className='time'>
            {/* Timer progress bar */}
            <p className='timer-progress-bar'>
              <span className={`timer-progress ${time} bold`} style={{ width: `${timerProgress}%` }}>
              </span>
            </p>
            {/* Display timer */}
            <span className='timer-progress-box'> 00:{formattedTimer} </span>
          </div>
          {/* Quiz content */}
          <h2 className='heading2'>{userName}, let's Start!</h2>
          <p className='question-no'>Question {currentQuestion + 1}:</p>
          <p className='question'>{questions[currentQuestion].question}</p>
          <ul className='option-box'>
            {/* Display options */}
            {questions[currentQuestion].options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleAnswer(option)}>
                {option}
              </li>
            ))}
          </ul>
          {/* Display feedback */}
          <div className={`feedback ${feedbackClass} `}>{feedback}</div>
          {/* Progress bar */}
          <div className='progress-bar'>
            <div
              className='progress'
              style={{ width: `${progress}%` }}>
              <span className='progress-circle'>{currentQuestion + 1}</span>
            </div>
          </div>
        </div>
      ) : (
        // Quiz completed, show result
        <Result
          userName={userName}
          score={score}
          totalQuestions={questions.length}
          setShowQuiz={setShowQuiz}
          setUserName={setUserName}
          userAnswers={userAnswers}
          timer={40 - timer}
        />
      )}
    </div>
  );
};

export default Quiz;
