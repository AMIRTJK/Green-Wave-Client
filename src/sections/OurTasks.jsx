import React from "react";
import ContentText from "../components/ContentText";
import ContentImage from "../components/ContentImage";

import { Element } from "react-scroll";

import ourTasksImage from "../assets/Background/4-enhanced.avif";

const OurTasks = () => {
  return (
    <div className="container">
      <main className="about-us">
        <ContentText
          chapter="Наши задачи"
          title="Какие задачи мы ставим перед собой и как мы планируем их реализовать?"
          description={
            <>
              <p>
                • Проведение исследований и разработка проектов по
                энергосбережению
              </p>
              <p>
                • Сотрудничество с государственными и частными организациями.
              </p>
              <p>• Проведение семинаров, тренингов и практических занятий</p>
              <p>
                • Продвижение и реализация энергосберегающих решений в различных
                секторах
              </p>
            </>
          }
        />
        <ContentImage imageSource={ourTasksImage} />
      </main>
    </div>
  );
};

export default OurTasks;
