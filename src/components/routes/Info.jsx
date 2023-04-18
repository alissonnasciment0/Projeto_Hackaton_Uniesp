import style from "../Info.module.css";
import { Navbar } from "./Navbar";
import { ImBooks , ImSphere , ImEyePlus } from "react-icons/im";

export function Info() {
  return (
    <div className={style.content}>
      <Navbar />
      <div>
        <p className={style.missao}>NOSSA MISSÃO</p>
        <div className={style.containertitulo}>
          <h1 className={style.titulo}>
            Guia do Saber é um site que oferece uma maneira fácil e
            conveniente de obter respostas para suas perguntas
          </h1>
          <h2 className={style.subtitulo}>
            Não importa o quão desafiadoras sejam suas perguntas, com o nosso
            chatbox, você pode obter respostas em tempo real!
          </h2>
        </div>
        <div className={style.containertopicos}>
          <div className={style.containerfacil}>
            <h4 className={style.facil}><ImBooks/> &nbsp; Fácil</h4>
            <p className={style.facilsub}>
              Obtenha suas respostas em um só lugar.
            </p>
          </div>
          <div className={style.containeruniversal}>
            
            <h4 className={style.universal}><ImSphere/> &nbsp; Universal </h4>
            <p className={style.universalsub}>
              Temos como objetivo auxiliar na compreensão e aprendizado em todas
              as áreas acadêmicas.
            </p>
          </div>
          <div className={style.containeracessivel}>
            <h4 className={style.acessivel}> <ImEyePlus/> &nbsp; Acessível</h4>
            <p className={style.acessivelsub}>
              Grande cuidado na experiência do usuário e design permite a todos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
