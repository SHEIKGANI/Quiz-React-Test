import "./styles.css";
import { useState } from "react";
import questions from "./constants/questions.json";
import Question from "./components/question";
import Result from "./components/result";
export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  //keep all of the logic in App.jsx

  const handleNextQuestion = (isCorrect) => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswers([...userAnswers, isCorrect]);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
  };

  return (
    <div className="App">
      <h1 styles={{ text: "red" }}>Quiz-Text</h1>
      {/* {questions} */}
      {currentQuestion < questions.length && (
        <Question
          question={questions[currentQuestion]}
          onAnswerClick={handleNextQuestion}
        />
      )}

      {/* {result component} */}
      {currentQuestion === questions.length && (
        <Result
          userAnswers={userAnswers}
          questions={questions}
          resetQuiz={resetQuiz}
        />
      )}
    </div>
  );
}
