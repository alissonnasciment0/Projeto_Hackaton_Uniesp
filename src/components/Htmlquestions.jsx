import React, { useState } from 'react';
import style from './Htmlquestions.module.css';


const quizData = [
  
    {
        question: "Qual tag HTML é usada para definir um hyperlink?",
        answers: [
          { text: "<a>", correct: true },
          { text: "<p>", correct: false },
          { text: "<h1>", correct: false },
          { text: "<img>", correct: false }
        ]
      },
      {
        question: "Qual tag HTML é usada para definir uma imagem?",
        answers: [
          { text: "<img>", correct: true },
          { text: "<a>", correct: false },
          { text: "<p>", correct: false },
          { text: "<h1>", correct: false }
        ]
      },
      {
        question: "Qual é a função da tag <head> em um documento HTML?",
        answers: [
          { text: "Exibir o conteúdo principal da página", correct: false },
          { text: "Definir a seção de navegação da página", correct: false },
          { text: "Definir o conteúdo que é exibido no navegador", correct: false },
          { text: "Definir informações sobre o documento, como o título e a codificação de caracteres", correct: true }
        ]
      },
      {
        question: "Qual tag HTML é usada para criar uma lista não ordenada?",
        answers: [
          { text: "<ol>", correct: false },
          { text: "<li>", correct: true },
          { text: "<ul>", correct: false },
          { text: "<dl>", correct: false }
        ]
      }
    ];
    

export function Htmlquestions() {
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


