import React, { useState, useCallback } from "react";
import style from "../Navbar.module.css";
import { BsGithub, BsChevronDown, BsChevronUp } from "react-icons/bs";
import { Link } from "react-router-dom";

export function Navbar() {
  const [showDevOptions, setShowDevOptions] = useState(false);

  const data = [
    {
      id: 1,
      name: "Paulo",
      url: "https://github.com/pauloabrantesii",
      typeOpenUrl: "_blank",
    },
    {
      id: 2,
      name: "Alisson",
      url: "https://github.com/alissonnasciment0",
      typeOpenUrl: "_blank",
    },
    {
      id: 3,
      name: "Othon",
      url: "https://github.com/Othonnery00",
      typeOpenUrl: "_blank",
    },
    {
      id: 4,
      name: "Arthur",
      url: "https://github.com/ajvieiraa",
      typeOpenUrl: "_blank",
    },
  ];

  console.log(showDevOptions);
  const handleCloseDropdown = useCallback(() => {
    setShowDevOptions(false);
  }, [showDevOptions]);

  const handleDevHover = useCallback(() => {
    setShowDevOptions(!showDevOptions);
  }, [showDevOptions]);
  const handleDevLeave = () => {
    setShowDevOptions(false);
  };

  return (
    <div>
      <nav className={style.navbar}>
        <li className={style.homebutton}>
          <Link to="/">Home</Link>
        </li>

        <ul>
          <li className={style.contato}>
            <Link to="/contact">Contato</Link>
          </li>

          <li className={style.sobre}>
            <Link to="/info">Sobre</Link>
          </li>

          <li className={style.developers}>
            <a
              href="#"
              onMouseEnter={handleDevHover}
              className={`${style.developers} ${
                showDevOptions ? style.active : ""
              }`}
            >
              {" "}
              Developers{" "}
              <span className={style.chevronIcon}>
                {" "}
                {showDevOptions ? <BsChevronUp /> : <BsChevronDown />}
              </span>
            </a>

            {showDevOptions && (
              <ul className={style.lista} onMouseLeave={handleDevLeave}>
                {data.map((item) => (
                  <li key={item.id}>
                    <a href={item.url} target={item.typeOpenUrl}>
                      {" "}
                      <BsGithub /> &nbsp; {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
