import React from "react";

const ContentImage = ({ imageSource }) => {
  return (
    <div className="content-image">
      <img src={imageSource} alt="" />
    </div>
  );
};

export default ContentImage;
