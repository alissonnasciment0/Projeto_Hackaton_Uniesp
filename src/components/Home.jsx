import { ChatGPT } from "./Chatbox";
import style from './Home.module.css';
import React, { useState } from 'react';
import { BsHouseDoorFill } from "react-icons/bs";
import { Quiz } from "./Quiz";
import { BsSlack , BsJoystick } from "react-icons/bs";


export function Home() {
  const [showChat, setShowChat] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
 
  const handleChatClick = () => {
    setShowChat(true);
  };

  const handleQuizClick = () => {
    setShowQuiz(true);
  };

  const handleBackClick = () => {
    setShowChat(false);
    setShowQuiz(false);
  };

  return (
    
    <div>
      {showChat && <button className={`${style.exit} ${style.icon} `} onClick={handleBackClick}> <BsHouseDoorFill /> </button>}
      {showQuiz && <button className={`${style.exit} ${style.icon} `} onClick={handleBackClick}> <BsHouseDoorFill /> </button>}
      
      {!showChat && !showQuiz &&
        <div className={`${style.inicar} ${style.link}`}>
          <span className={style.start}><strong>Guia</strong></span>
          <span className={style.tutor}><strong>do</strong></span>
          <span className={style.personalizado}><strong>Saber</strong></span>
          <h2 className={style.subtitle}><strong>Aprenda com praticidade!</strong></h2>
          <button className={style.journey} onClick={handleChatClick}><strong> <BsSlack/>  &nbsp; Chat de aprendizagem </strong> </button>
        </div>
      }

      {showChat && <ChatGPT />}

      {!showChat && !showQuiz &&
        <div className={`${style.inicar} ${style.quiz}`}>
          <button className={style.buttonquiz} onClick={handleQuizClick}><strong> <BsJoystick/>  &nbsp; Teste Seu Conhecimento </strong> </button>
        </div>
      }
      
      {showQuiz && <Quiz />}
    </div>
  );
}
