import React from 'react';
import './default.css'; // Import the CSS file
import icon_download from "../../assets/icon_download.png"
const ButtonBanner = () => (
  <div className="button-banner-container">
    <div className="button-banner-button hover-animation-1">
      <div className="button-banner-indicator">
        <img src={icon_download} />
      </div>
      <div className="button-banner-text">
        Download Trim
      </div>
    </div>
  </div>
);

export default ButtonBanner;
