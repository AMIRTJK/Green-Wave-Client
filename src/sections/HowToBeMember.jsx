import React from "react";
import ContentText from "../components/ContentText";
import ContentImage from "../components/ContentImage";
import FormRequest from "../components/FormRequest";

import howToBeMemberImage from "../assets/Background/9-enhanced.png";

const HowToBeMember = () => {
  return (
    <div className="container">
      <main className="about-us how-to-be-member">
        <ContentText
          title="Как стать участником?"
          description="Членами «Мавчи Сабз» могут быть граждане Таджикистана и иностранцы, достигшие 18 лет. 
Присоединяйтесь к нам и станьте частью движения за устойчивое будущее!"
        >
          <FormRequest />
        </ContentText>
        <ContentImage imageSource={howToBeMemberImage} />
      </main>
    </div>
  );
};

export default HowToBeMember;
