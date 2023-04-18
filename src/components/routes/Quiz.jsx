import React, { useState } from "react";
import style from "../Quiz.module.css";
import { Jsquestions } from "../Jsquestions.jsx";
import { Pyquestions } from "../Pyquestions.jsx";
import { Cssquestions } from "../CssQuestions";
import { Htmlquestions } from "../Htmlquestions";
import { Reactquestions } from "../Reactquestions";
import { BsFillCaretLeftSquareFill } from "react-icons/bs";
import { Navbar } from "./Navbar";

export function Quiz() {
  const [showJs, setShowJs] = useState(false);
  const [showQuiz, setShowQuiz] = useState(true);
  const [showPy, setShowPy] = useState(false);
  const [showCss, setShowCss] = useState(false);
  const [showHtml, setShowHtml] = useState(false);
  const [showReact, setShowReact] = useState(false);

  const handleJsClick = () => {
    setShowJs(true);
    setShowQuiz(false);
  };
  const handlePyClick = () => {
    setShowPy(true);
    setShowQuiz(false);
  };

  const handleCssClick = () => {
    setShowCss(true);
    setShowQuiz(false);
  };

  const handleHtmlClick = () => {
    setShowHtml(true);
    setShowQuiz(false);
  };

  const handleReactClick = () => {
    setShowReact(true);
    setShowQuiz(false);
  };

  const handleBackClick = () => {
    setShowJs(false);
    setShowQuiz(true);
    setShowPy(false);
    setShowCss(false);
    setShowHtml(false);
    setShowReact(false);
  };

  return (
    <div className={style.quizcontainerstart}>
      <Navbar />

      {showQuiz && (
        <>
          <div className={style.quizstart}>
            <h1 className={style.title}>
              <strong>QUIZ</strong>
            </h1>
            <h3 className={style.welcome}>
              <strong>Se divirta aprendendo! </strong>
            </h3>
            <p className={style.choice}>Escolha o seu desafio : </p>
            <div className={style.midle}>
              <button
                className={style.programacao}
                onClick={handleJsClick}
                disabled={showJs}
              >
                Javascript
              </button>
              <button
                className={style.programacao}
                onClick={handlePyClick}
                disabled={showPy}
              >
                Python
              </button>
              <button
                className={style.programacao}
                onClick={handleCssClick}
                disabled={showCss}
              >
                Css
              </button>
              <button
                className={style.programacao}
                onClick={handleHtmlClick}
                disabled={showHtml}
              >
                Html
              </button>
              <button
                className={style.programacao}
                onClick={handleReactClick}
                disabled={showReact}
              >
                React
              </button>
            </div>
          </div>
        </>
      )}

      {showJs && <Jsquestions />}
      {showPy && <Pyquestions />}
      {showCss && <Cssquestions />}
      {showHtml && <Htmlquestions />}
      {showReact && <Reactquestions />}

      {!showQuiz && (
        <div className={style.returnbuttoncontainer}>
          <button className={style.return} onClick={handleBackClick}>
            <BsFillCaretLeftSquareFill /> &nbsp; Voltar
          </button>
        </div>
      )}
    </div>
  );
}
