import React from "react";
import ReactDOM from "react-dom/client";
import QuizApp from "./components/QuizApp";
import "./App.css";

function App() {
  return (
    <div className="mainDiv">
      <QuizApp />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
