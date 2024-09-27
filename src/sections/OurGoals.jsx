import React from "react";

import ContentImage from "../components/ContentImage";
import ContentText from "../components/ContentText";
import ourGoalsImage from "../assets/Background/3-enhanced.png";

export const OurGoals = () => {
  return (
    <div className="container">
      <main className="about-us">
        <ContentImage imageSource={ourGoalsImage} />
        <ContentText
          chapter="Наши цели"
          title="Какие цели мы преследуем в нашей деятельности и как планируем их достичь?"
          description={
            <>
              <p>• Повышение эффективности использования энергии и ресурсов.</p>
              <p>• Разработка и внедрение инновационных технологий.</p>
              <p>
                • Образование и осведомленность общественности о рациональном
                потреблении.
              </p>
              <p>
                • Поддержка сельскохозяйственных и малых предприятий в
                применении современных технологий.
              </p>
            </>
          }
        />
      </main>
    </div>
  );
};

export default OurGoals;
