import "./default.css";
import image_0 from "../../assets/Depth 6, Frame 0.png";

export default function Landing() {
  return (
    <div class="landing-container">
      <div class="landing-content">
        <div class="landing-background" style={{backgroundImage: "url('{}')".format(image_0)}}>
          <div class="landing-header">
            <div class="landing-title">Your personal barber, on-demand</div>
            <div class="landing-subtitle">
              Enjoy a professional haircut in the comfort of your home, office,
              or hotel. No more waiting in line or traveling to the barbershop.
            </div>
          </div>
          <div class="landing-buttons ">
            <div class="landing-button-ios hover-animation-1">
              <div class="landing-button-text">Download for iOS</div>
            </div>
            <div class="landing-button-android hover-animation-1">
              <div class="landing-button-text">Download for Android</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
