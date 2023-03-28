import { ChatGPT } from "./Chatbox"
import { AiOutlineCloseCircle } from "react-icons/ai";
import style from './Home.module.css'
import React, { useState } from 'react';


 
export function Home() {
  const [showChat, setShowChat] = useState(false);

  const handleClick = () => {
    setShowChat(true);
  };

  return (
    <div>
        {!showChat &&
      <div className={`${style.inicar} ${style.link}`}>
        <div>
          
        </div>
          <span className={style.start}> <strong>Guia</strong> </span>
          <span className={style.tutor}><strong>do</strong> </span>
          <span className={style.personalizado}> <strong>Saber</strong> </span>
          <h2 className={style.subtitle}>Descubra o mundo do conhecimento!</h2>
          <button className={style.journey} onClick={handleClick}><strong> Iniciar Jornada </strong> </button>
       </div>
     }
      
    

    
      {showChat && <ChatGPT />}
      {showChat && <button className={`${style.exit} ${style.icon}`} onClick={() => setShowChat(false)}> <AiOutlineCloseCircle /> Voltar ao Inicio </button>}
    
    </div>
    
  );
}
