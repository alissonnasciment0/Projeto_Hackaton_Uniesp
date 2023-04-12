import React, { useState } from 'react';
import style from './Chatbox.module.css';
import { BsFillSendFill , BsEraserFill } from "react-icons/bs";

const apiKey = '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';

export function ChatGPT() {
  const [message, setMessage] = useState('');
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  

  function handleSubmit(e) {
    e.preventDefault();

    if (!message) {
      return;
    }

    setIsLoading(true);

    fetch("https://api.openai.com/v1/completions",{
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: "Responda como um professor:" + message,
            max_tokens: 2048,
            temperature: 0.5
        })
    })
    .then((response) => response.json())
    .then((response) => {
        let r = response.choices[0]['text']
        setHistory([...history, { message, response: r }]);
    })
    .catch((e) => {
        console.log(`Error -> ${e}`)
    })
    .finally(() => {
        setIsLoading(false);
        setMessage('');
    })
  }
// deletar chat 
function handleClear() {
  setHistory([]);

}
  return (

    <div> 
       <div className={style.container}>
      <p className={style.carregando} id="status">{isLoading ? 'Carregando...' : ''}</p>
      <div id="history">
        {history.map((item, index) => (
          <div key={index}>
            <div className={style.boxmessage}>
              <p className={style.message}>{item.message}</p>
            </div>
            <div className={style.response}>
              <p className={style.result}>{item.response}</p>
            </div>
          </div>
        ))}
      </div>     
       </div>
       <form onSubmit={handleSubmit}>
        <div className={style.value}>
          <input type="text" id="message-input"  className={style.input} placeholder="Pergunte aqui..." value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
      </form> 

      <div className={style.inputButton}>
          <button className={style.send} onClick={handleSubmit} type="submit" disabled={isLoading}> <BsFillSendFill /> </button>
          <button className={style.clear} onClick={handleClear} > <BsEraserFill /> </button>
      </div>
    </div>
   
  );
}










