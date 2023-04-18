import { ChatGPT } from "./Chatbox";
import style from "../Home.module.css";
import React, { useState } from "react";
import { BsSlack, BsJoystick } from "react-icons/bs";

import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";

export function Home() {
  return (
    <div className={style.homecontainer}>
      <div>
        <Navbar />
        <div>
          <div className={`${style.inicar} ${style.link}`}>
            <span className={style.start}>
              <strong>Guia</strong>
            </span>
            <span className={style.tutor}>
              <strong>do</strong>
            </span>
            <span className={style.personalizado}>
              <strong>Saber</strong>
            </span>
            <h2 className={style.subtitle}>
              <strong>Aprenda com praticidade!</strong>
            </h2>
            <div>
            <Link to="Chat" className={style.journey}>
              {" "}
              <BsSlack /> &nbsp; Chat de aprendizagem
            </Link>
            </div>
            
          </div>
        </div>

        <div className={`${style.inicar} ${style.quiz}`}>
          <Link to="Quiz" className={style.buttonquiz}>
            {" "}
            <BsJoystick /> &nbsp; Teste Seu Conhecimento
          </Link>
        </div>
      </div>
    </div>
  );
}
