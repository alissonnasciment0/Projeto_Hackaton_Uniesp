import React, { useState } from 'react';
import style from './Pyquestions.module.css';


const quizData = [
    {
        question: "O que é Python?",
        answers: [
        { text: "Uma linguagem de programação", correct: true },
        { text: "Um editor de texto", correct: false },
        { text: "Um sistema operacional", correct: false },
        { text: "Um servidor web", correct: false }
        ]
        },
        {
        question: "Qual é a sintaxe correta para imprimir 'Hello, World!' em Python?",
        answers: [
        { text: "console.log('Hello, World!');", correct: false },
        { text: "print('Hello, World!')", correct: true },
        { text: "document.write('Hello, World!');", correct: false },
        { text: "echo 'Hello, World!';", correct: false }
        ]
        },
        {
        question: "Qual é a diferença entre lista e tupla em Python?",
        answers: [
        { text: "As tuplas são mutáveis, enquanto as listas não são", correct: false },
        { text: "As listas são mutáveis, enquanto as tuplas não são", correct: true },
        { text: "As listas e as tuplas são mutáveis", correct: false },
        { text: "As listas e as tuplas não são mutáveis", correct: false }
        ]
        },
        {
        question: "Qual é a forma correta de definir uma função em Python?",
        answers: [
        { text: "function myFunction():", correct: false },
        { text: "def myFunction():", correct: true },
        { text: "myFunction = function():", correct: false },
        { text: "myFunction():", correct: false }
        ]
        }
        ];

export function Pyquestions() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
 

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
      {showScore ? (
        <div className={style.scorecontainer}>
          Você acertou {score} de {quizData.length} perguntas. 
          <button  onClick={handleResetButtonClick}>Jogar novamente</button>
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


