import React, { useState } from 'react';
import Quiz from './Quiz';
import "./css/QuizApp.css"

const QuizApp = () => {
  const [userName, setUserName] = useState('');
  const [showQuiz, setShowQuiz] = useState(false);

  const startQuiz = (name) => {
    if (userName !== "") {
      setUserName(name);
      setShowQuiz(true);
    }
  };

  return (
    <div>
      {!showQuiz ? (
        <div className='Quiz-app'>
          <h2 className='heading'>Welcome to the Quiz App!</h2>
          <label htmlFor="userName">Enter your name:</label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <button className='start-btn' onClick={() => startQuiz(userName)}>Start Quiz</button>
        </div>
      ) : (
        <Quiz
          userName={userName}
          setUserName={setUserName}
          setShowQuiz={setShowQuiz}
        />
      )}
    </div>
  );
};

export default QuizApp;