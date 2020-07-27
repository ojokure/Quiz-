import React, { useState } from "react";

// Components
import QuestionCard from "./Components/QuestionCard";
function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startQuiz = async () => {};
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};
  const nextQuestion = () => {};
  return (
    <div className="App">
      <h1> React Quiz </h1>
      <button className="start" onClick={startQuiz}></button>
      <p className="score"> Score: </p>
      <p> Loading Question ...</p>
      <QuestionCard />
      <button className="start" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;
