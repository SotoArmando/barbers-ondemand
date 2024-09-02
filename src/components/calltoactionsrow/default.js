import "./default.css";

import image_5 from "../../assets/Depth 8, Frame 0-1.png";
import image_6 from "../../assets/Depth 8, Frame 0-2.png";
import image_7 from "../../assets/Depth 8, Frame 0-3.png";
import image_8 from "../../assets/Depth 8, Frame 0.png";
import Step from "../step/default";

const stepsData = [
  {
    imageSrc: image_8,
    title: "Book a haircut",
    description:
      "Choose from our network of professional barbers, and book a time that works for you",
    hoverAnimation: "hover-animation-0",
  },
  {
    imageSrc: image_7,
    title: "Choose your location",
    description:
      "Whether you're at home, in the office, or at a hotel, we come to you",
  },
  {
    imageSrc: image_6,
    title: "Select a time",
    description: "Need a haircut now? Later? Tomorrow? We've got you covered",
  },
  {
    imageSrc: image_5,
    title: "Pay in the app",
    description:
      "No need to bring cash. Pay conveniently and securely in the app",
  },
];

export default function CallToActionRow() {
  return (
    <div class="call-to-action">
      <div class="section">
        <div class="section-title">
          <div class="title">How Trim works</div>
        </div>
        <div class="section-subtitle">
          <div class="subtitle">
            From booking to payment, Trim makes getting a great haircut easy and
            convenient.
          </div>
        </div>
      </div>
      <div className="steps-container">
      <div className="steps-row">
          {stepsData.map((step, index) => (
            <Step
              key={index}
              imageSrc={step.imageSrc}
              title={step.title}
              description={step.description}
              hoverAnimation={step.hoverAnimation}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
// <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         gap: "0rem",
//         height: "7.8125rem",
//         width: "unset",
//         justifyContent: "start",
//         alignItems: "stretch",
//         borderRadius: "0.75rem",
//         overflow: "hidden",
//       }}
//     >
//       <img
//         src={imageSrc}
//         alt={title}
//         className="card-image hover-animation-0"
//       />
//     </div>
