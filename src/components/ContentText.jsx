import React from "react";

export const ContentText = ({ chapter, title, description, children }) => {
  return (
    <div className="content-text">
      <div className="chapter">
        <i></i>
        <p>{chapter}</p>
      </div>
      <h2>{title}</h2>
      <div>{description}</div>
      {children}
    </div>
  );
};

export default ContentText;
