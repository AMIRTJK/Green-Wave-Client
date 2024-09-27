import React from "react";

import { Link } from "react-scroll";

import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const FullScreen = () => {
  return (
    <div className="fullscreen">
      <header>
        <div className="container">
          <nav>
            <a href="">
              <div className="logo">
                <img src="src/assets/Logo/logo-1.svg" alt="" />
                <p>Мавчи сабз</p>
              </div>
            </a>
            <ul>
              <li>
                <a href="">Картинки</a>
              </li>
              <li>
                <a href="">Про нас</a>
              </li>
              <li>
                <a href="">Статьи</a>
              </li>
            </ul>
            <button className="sign-in">
              <p>Войти</p>
            </button>
          </nav>
        </div>
      </header>
      <div className="container">
        <div className="wrapper-title">
          <h1>
            <span>М</span>авчи сабз
          </h1>
          <p>
            Общественное объединение по эффективному использованию ресурсов!
          </p>
        </div>
      </div>

      <Link
        classID="next-button"
        activeClass="active"
        to="test1"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        <div className="next-button">
          <KeyboardArrowDownOutlinedIcon />
        </div>
      </Link>
    </div>
  );
};

export default FullScreen;
