import style from './Chatbox.module.css';
import { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import {CardResult, TitleResult, ContentResult} from './styles.chatbot';
import { BsFillSendFill , BsEraserFill } from "react-icons/bs";

const OPENAI_API_KEY = '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';

export function ChatGPT() {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('');

  const handleKeyPress = (e) => {
    if (inputValue && e.key === 'Enter') sendQuestion();
  };

  const sendQuestion = () => {
    const sQuestion =  inputValue;
    setInputValue('Carregando...');
    setResultValue((prevResult) => prevResult + `\n 👤 \n ${sQuestion} \n `);

    fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + OPENAI_API_KEY,
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: "Explique de maneira tecnica:" + sQuestion,
        max_tokens: 2048,
        temperature: 0.5,
      }),
    })
      .then((response) => response.json())
      .then((json) => {

       
        if (resultValue) setResultValue((prevResult) => prevResult + '\n' );

        if (json.error?.message) {
          setResultValue(
            (prevResult) => prevResult + `Error: ${json.error.message}`
          );
        } else if (json.choices?.[0].text) {
          const text = json.choices[0].text || 'Sem resposta';

          setResultValue((prevResult) =>  prevResult + `\n 👨‍💻 ${text} \n`);
        }

        setResultValue((prevResult) => {
          const resultTextArea = document.getElementById('result');
          resultTextArea.scrollTop = resultTextArea.scrollHeight;
          return prevResult;
        });
      })
      
      .catch((error) => console.error('Error:', error))
      .finally(() => {
        setInputValue('');
        const inputTextArea = document.getElementById('inputQuestion');
        inputTextArea.focus();
      });
  };

  const handleClear = () => {
    setResultValue('');
  };
  const handleSendQuestion = () => {
    if (inputValue) sendQuestion();
  };

  return (
    <div className={style.content}>
      <div className={style.textareaWrapper}>
        
        <textarea
          disabled
          className={style.result}
          id="result"
          rows="10"
          value={resultValue}
          placeholder="Resposta do Tutor"
        ></textarea>

        <div className={style.inputWrapper}>
          <textarea
            className={style.value}
            id="inputQuestion"
            value={inputValue}
            rows="5"
            placeholder="Digite a sua pergunta"
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={inputValue === 'Carregando...'}
          ></textarea>

          <div className={style.inputButton}>
            <button className={style.send} onClick={handleSendQuestion}>
              < BsFillSendFill /> 
            </button>
            <button className={style.clear} onClick={handleClear}>
              <strong> < BsEraserFill /></strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}