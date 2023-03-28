import style from './Chatbox.module.css'
import { useState } from "react";

const OPENAI_API_KEY = "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";

export function ChatGPT() {
  const [inputValue, setInputValue] = useState("");
  const [resultValue, setResultValue] = useState("");

  const handleKeyPress = (e) => {
    if (inputValue && e.key === "Enter") sendQuestion();
  };

  const sendQuestion = () => {
    const sQuestion = inputValue;
    setInputValue("Carregando...");
    setResultValue((prevResult) => prevResult + `\n\n\nEu: ${sQuestion}`);

    fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + OPENAI_API_KEY,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: sQuestion,
        max_tokens: 2048,
        temperature: 0.5,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        if (resultValue) setResultValue((prevResult) => prevResult + "\n");

        if (json.error?.message) {
          setResultValue(
            (prevResult) => prevResult + `Error: ${json.error.message}`
          );
        } else if (json.choices?.[0].text) {
          const text = json.choices[0].text || "Sem resposta";
          setResultValue((prevResult) => prevResult + `Tutor: ${text}`);
        }

        setResultValue((prevResult) => {
          const resultTextArea = document.getElementById("result");
          resultTextArea.scrollTop = resultTextArea.scrollHeight;
          return prevResult;
        });
      })
      .catch((error) => console.error("Error:", error))
      .finally(() => {
        setInputValue("");
        const inputTextArea = document.getElementById("inputQuestion");
        inputTextArea.focus();
      });
  };
  return (
    <div className="content">
      <textarea
        className={style.result}
        id="result"
        rows="10"
        disabled
        value={resultValue}
        placeholder="Resposta do Tutor"
      ></textarea>

      <textarea
        id="inputQuestion"
        value={inputValue}
        placeholder="Inicie o seu aprendizado"
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        disabled={inputValue === "Carregando..."}
      ></textarea>
    </div>
  );
}



