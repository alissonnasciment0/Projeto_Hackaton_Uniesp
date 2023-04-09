import React, { useState } from 'react';
import style from './Reactquestions.module.css';

const quizData = [
    {
        question: "O que é React?",
        answers: [
        { text: "Uma linguagem de programação", correct: false },
        { text: "Uma biblioteca JavaScript de front-end", correct: true },
        { text: "Um framework de servidor", correct: false },
        { text: "Um sistema operacional", correct: false }
        ]
        },
        {
        question: "O que é JSX no React?",
        answers: [
        { text: "Um tipo de dado", correct: false },
        { text: "Uma extensão de sintaxe para JavaScript", correct: true },
        { text: "Uma nova biblioteca de gerenciamento de estado", correct: false },
        { text: "Uma linguagem de banco de dados", correct: false }
        ]
        },
        {
        question: "O que é o virtual DOM no React?",
        answers: [
        { text: "Uma maneira de depurar componentes React", correct: false },
        { text: "Uma versão mais leve do DOM real", correct: true },
        { text: "Uma nova linguagem de programação no React", correct: false },
        { text: "Uma ferramenta para renderização do lado do servidor no React", correct: false }
        ]
        },
        {
        question: "Qual é a diferença entre state e props no React?",
        answers: [
        { text: "Eles são a mesma coisa", correct: false },
        { text: "Props são imutáveis, enquanto state é mutável", correct: true },
        { text: "State é passado de componentes pais, enquanto props são definidos dentro do componente", correct: false },
        { text: "Props são usados ​​para buscar dados, enquanto state é usado para renderizar o componente", correct: false }
        ]
        }
        ];
    
    export function Reactquestions() {
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
      