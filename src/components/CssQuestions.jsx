import React, { useState } from 'react';
import style from './Cssquestions.module.css';


const quizData = [
    {
    question: "O que significa CSS?",
    answers: [
    { text: "Cascading Style Sheets", correct: true },
    { text: "Cascading Script Sheets", correct: false },
    { text: "Cascading System Sheets", correct: false },
    { text: "Cascading Syntax Sheets", correct: false }
    ]
    },
    {
    question: "Qual é a propriedade utilizada para alterar a cor do texto em CSS?",
    answers: [
    { text: "font-color", correct: false },
    { text: "text-color", correct: false },
    { text: "color", correct: true },
    { text: "background-color", correct: false }
    ]
    },
    {
    question: "Como é possível aplicar um estilo a um elemento específico em CSS?",
    answers: [
    { text: "Através do seletor de tipo", correct: false },
    { text: "Através do seletor de classe", correct: true },
    { text: "Através do seletor de ID", correct: false },
    { text: "Através do seletor universal", correct: false }
    ]
    },
    {
    question: "Qual é a função da propriedade 'display' em CSS?",
    answers: [
    { text: "Alterar a cor de um elemento", correct: false },
    { text: "Modificar a fonte de um elemento", correct: false },
    { text: "Controlar a visibilidade de um elemento", correct: true },
    { text: "Alterar o tamanho de um elemento", correct: false }
    ]
    }
    ];

    export function Cssquestions() {
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
                <button onClick={handleResetButtonClick}>Jogar novamente</button>
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
      
      
      