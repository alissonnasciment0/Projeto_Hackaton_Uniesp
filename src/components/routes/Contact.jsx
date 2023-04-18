import React, { useState } from "react";
import style from "../Contact.module.css";
import { Navbar } from "./Navbar";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_oej9azp",
        "template_nago0mo",
        templateParams,
        "Ih66vEdX2EJSxfBmA"
      )
      .then(
        (response) => {
          console.log("EMAIL ENVIADO", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("ERRO: ", err);
        }
      );
  }

  return (
    <div>
      <Navbar />
      <div className={style.containercontato}>
        <div className={style.containertitle}>
          <div className={style.titlecontato}>
            <h1 className={style.title}>Fale com a nossa equipe</h1>
            <h3 className={style.subtitle}>
            Estamos prontos para ajudá-lo em seu processo de aprendizado!
            </h3>
          </div>
        </div>
        <div className={style.emailhelp}>
          <div className={style.containeremail}>
            <h1 className={style.titleform}>Contato</h1>

            <form className={style.form} onSubmit={sendEmail}>
              <input
                className={style.input}
                type="text"
                placeholder="Digite seu nome"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />

              <input
                className={style.input}
                type="text"
                placeholder="Digite seu email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />

              <textarea
                className={style.textarea}
                placeholder="Digite sua mensagem..."
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />

              <input className={style.button} type="submit" value="Enviar" />
            </form>
          </div>
          <div className={style.helpcontainer}>
            <h3 className={style.titlehelp}>
              Dificuldades na sua pesquisa? Envie sua pergunta
              ou sugestão.
            </h3>
            <p className={style.subhelp}>
              Nosso chatbox funciona em conjunto com o ChatGPT-4 e foi
              aprimorado para fornecer os melhores resultados para você.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
