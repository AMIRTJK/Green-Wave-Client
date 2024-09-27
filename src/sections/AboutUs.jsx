import React from "react";
import ContentText from "../components/ContentText";
import ContentImage from "../components/ContentImage";

import { Element } from "react-scroll";

const AboutUs = () => {
  return (
    <div className="container">
      <Element name="test1" className="element"></Element>
      <main className="about-us">
        <ContentText
          chapter="О нас"
          title="Какова миссия и цели общественного объединения «Мавчи Сабз»?"
          description="«Мавчи Сабз» – некоммерческое общественное объединение, стремится к
        рациональному использованию энергии и природных ресурсов в Таджикистане.
        Наша цель – информировать и обучать общество, способствуя устойчивому
        развитию и инновационным решениям в области энергосбережения."
        />
        <ContentImage imageSource="src/assets/Background/2-enhanced.png" />
      </main>
    </div>
  );
};

export default AboutUs;
