import React from "react";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";

import footerLogoImage from "../assets/Logo/logo-1.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="content-footer">
          <div className="logo-footer">
            <a href="">
              <img className="footer-image" src={footerLogoImage} alt="" />
            </a>
            <p>
              «Мавчи Сабз» – общественное объединение по эффективному
              использованию ресурсов!
            </p>
          </div>
          <ul className="footer-list">
            <li className="title">Контакты</li>
            <li>Адрес: г.Душанбе, о.Сомони</li>
            <li>Телефон: 880008671</li>
            <li>Email: mavjisabz@gmail.com</li>
          </ul>
          <ul className="footer-list">
            <li className="title">Полезные ссылки</li>
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
          <ul className="footer-list">
            <li className="title">Социальные сети</li>
            <li>
              <WhatsAppIcon className="icon" />
              <p>WhatsApp</p>
            </li>
            <li>
              <TelegramIcon className="icon" />
              <p>Telegram</p>
            </li>
            <li>
              <InstagramIcon className="icon" />
              <p>Instagram</p>
            </li>
          </ul>
        </div>
        <p className="copyright-terms">
          Copyright 2024 Green Wave, Inc. Terms & Privacy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
