import "./default.css"; // Import the CSS file
import icon_chevron from "../../assets/Depth 7, Frame 1.png";

const FAQItems = () => (
  <div className="faq-items-container">
    <div className="faq-item">
      <div className="faq-item-header">
        <div className="faq-item-header-text">
          <div className="faq-item-header-text-content">
            How does Trim work?
          </div>
        </div>
        <div className="faq-item-header-indicator">
          <div className="faq-item-header-indicator-bar">
            <img src={icon_chevron} />
          </div>
          <div className="faq-item-header-indicator-gap"></div>
        </div>
      </div>
      <div className="faq-item-content">
        <div className="faq-item-content-text">
          Trim is an on-demand barber service that allows you to book a
          professional haircut at your convenience. Simply download the Trim
          app, create an account, and choose a date, time, and location for your
          appointment. One of our licensed barbers will come to you and provide
          a top-notch haircut in the comfort of your home, office, or hotel.
          After your haircut, you can pay securely in the app. No cash needed.
          It's that simple.
        </div>
      </div>
    </div>
  </div>
);

export default FAQItems;
