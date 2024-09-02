import React from "react";
import "./default.css"; // Import the CSS file
import social_icon0 from "../../assets/social_icon01.png";
import social_icon1 from "../../assets/social_icon02.png";
import social_icon2 from "../../assets/social_icon03.png";
import social_icon3 from "../../assets/social_icon04.png";
const Footer = () => (
  <div className="footer-container">
    <div className="footer-content-wrapper">
      <div className="footer-section">
        <div className="footer-links-container">
          <div className="footer-link-item">
            <div className="footer-link-text underline-text">
              About us
              <div/>
            </div>
          </div>
          <div className="footer-link-item">
            <div className="footer-link-text underline-text">Careers<div/></div>
          </div>
          <div className="footer-link-item">
            <div className="footer-link-text underline-text">Blog<div/></div>
          </div>
          <div className="footer-link-item">
            <div className="footer-link-text underline-text">Help center<div/></div>
          </div>
          <div className="footer-link-item">
            <div className="footer-link-text underline-text">Safety<div/></div>
          </div>
          <div className="footer-link-item">
            <div className="footer-link-text underline-text">Terms of service<div/></div>
          </div>
          <div className="footer-link-item">
            <div className="footer-link-text underline-text">Privacy policy<div/></div>
          </div>
        </div>
        <div className="footer-social-icons-container">
          <div className="footer-social-icon-item">
            <div className="footer-social-icon-bar">
              <div className="footer-social-icon-bar-color">
                <img src={social_icon0} />
              </div>
            </div>
          </div>
          <div className="footer-social-icon-item">
            <div className="footer-social-icon-bar">
              <div className="footer-social-icon-bar-color">
                <img src={social_icon1} />
              </div>
            </div>
          </div>
          <div className="footer-social-icon-item">
            <div className="footer-social-icon-bar">
              <div className="footer-social-icon-bar-color"><img src={social_icon2} /></div>
            </div>
          </div>
          <div className="footer-social-icon-item">
            <div className="footer-social-icon-bar">
              <div className="footer-social-icon-bar-color"><img src={social_icon3} /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
