import React, { useState } from 'react';
import { BsHouseDoorFill } from "react-icons/bs";
import style from './Jsquestions.module.css';


const quizData = [
  {
    question: "Qual é o resultado da expressão 2 + 2?",
    answers: [
      { text: "3", correct: false },
      { text: "4", correct: true },
      { text: "5", correct: false },
      { text: "6", correct: false }
    ]
  },
  {
    question: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
    answers: [
      { text: "var myVar;", correct: true },
      { text: "variable myVar;", correct: false },
      { text: "myVar = {};", correct: false },
      { text: "int myVar;", correct: false }
    ]
  },
  {
    question: "Qual é o resultado da expressão '2' + '2'?",
    answers: [
      { text: "'22'", correct: true },
      { text: "'4'", correct: false },
      { text: "'NaN'", correct: false },
      { text: "'undefined'", correct: false }
    ]
  },
  {
    question: "Qual é o método que adiciona um elemento ao final de um array?",
    answers: [
      { text: "push()", correct: true },
      { text: "pop()", correct: false },
      { text: "shift()", correct: false },
      { text: "unshift()", correct: false }
    ]
  }
];

export function Jsquestions() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
 

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleResetButtonClick = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };
  


  return (




    <div className={style.quizcontainer}>

     {showQuiz && <button className={`${style.exit} ${style.icon} `} onClick={handleBackClick}> <BsHouseDoorFill /> </button>}


      {showScore ? (
        <div className={style.returncontainer}>
            <div className={style.scorecontainer}>
          Você acertou {score} de {quizData.length} perguntas.
          <button onClick={handleResetButtonClick}>Jogar novamente</button>
        </div>

        </div>
        
      ) : (
        <>
          <div className={style.questioncontainer}>
            <h2>{quizData[currentQuestion].question}</h2>
          </div>
          <div className={style.answercontainer}>
            {quizData[currentQuestion].answers.map((answer, index) => (
              <button key={index} onClick={() => handleAnswerButtonClick(answer.correct)}>
                {answer.text}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}


