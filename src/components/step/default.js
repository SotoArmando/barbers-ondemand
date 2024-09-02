import React from "react";
import "./default.css"; // Import the CSS file

const Step = ({ imageSrc, title, description }) => {
  return (
    <div className="step">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0rem",
          height: "7.8125rem",
          width: "unset",
          justifyContent: "start",
          alignItems: "stretch",
          borderRadius: "0.75rem",
          overflow: "hidden",
        }}
      >
        <img className={"hover-animation-0"} src={imageSrc} alt={title} />
      </div>

      <div className="step-title">
        <div className="title">{title}</div>
      </div>
      <div className="step-description">
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default Step;
