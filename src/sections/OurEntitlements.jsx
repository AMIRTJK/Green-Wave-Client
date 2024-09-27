import React from "react";
import ContentText from "../components/ContentText";
import ContentImage from "../components/ContentImage";

const OurEntitlements = () => {
  return (
    <div className="container">
      <main className="about-us">
        <ContentImage imageSource="src/assets/Background/5-enhanced.png" />
        <ContentText
          chapter="Наши права"
          title="Каковы основные права вашей организации?"
          description={
            <>
              <p>• Информировать общественность и проводить мероприятия.</p>
              <p>• Защищать права и интересы членов Организации.</p>
              <p>
                • Заключать соглашения и участвовать в проектной деятельности.
              </p>
              <p>
                • Получать финансирование и поддержку от различных источников.
              </p>
            </>
          }
        />
      </main>
    </div>
  );
};

export default OurEntitlements;
