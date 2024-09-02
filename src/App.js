import "./App.css";

import { useEffect } from "react";
import gsap from "gsap";
import Landing from "./components/landing/default";
import CallToActionRow from "./components/calltoactionsrow/default";
import Navigation from "./components/navigation/default";
import Services from "./components/servicesrow/default";
import ReviewCard from "./components/card/review_card";
import FAQLabel from "./components/faqlabel/default";
import FAQItems from "./components/faqitems/default";
import ButtonBanner from "./components/buttonbanner/default";
import Footer from "./components/footer/default";

String.prototype.format = function () {
  var i = 0,
    args = arguments;
  return this.replace(/{}/g, function () {
    return typeof args[i] != "undefined" ? args[i++] : "";
  });
};

function App() {
  useEffect(() => {
    // Select all elements with the class "box"
    const boxes = document.querySelectorAll(".hover-animation-0");
    const buttons = document.querySelectorAll(".hover-animation-1");
    const texts = document.querySelectorAll(".underline-text");

    // Loop through each element and add a hover effect
    boxes.forEach((box) => {
      // On hover
      box.addEventListener("mouseenter", () => {
        gsap.killTweensOf(box);
        gsap.to(box, { scale: 1.2, duration: 0.357, ease: "power3.out" });
      });

      // On mouse leave
      box.addEventListener("mouseleave", () => {
        gsap.killTweensOf(box);
        gsap.to(box, { scale: 1, duration: 0.5, ease: "power3.out" });
      });
    });

    buttons.forEach((button) => {
      button.addEventListener("mouseenter", () => {
        gsap.killTweensOf(button);
        gsap.to(button, {
          scale: 1,
          duration: 0.2,
          ease: "power7.out",
          borderColor: "#2ecc71", // Change border color on hover
        });
      });

      // Define the animation for when the mouse leaves
      button.addEventListener("mouseleave", () => {
        gsap.killTweensOf(button);
        gsap.to(button, {
          scale: 1,
          duration: 0.554,
          ease: "power3.out",
          borderColor: "transparent", // Revert border color
        });
      });
    });

    texts.forEach((text) => {
      // Define the hover animation
      text.addEventListener("mouseenter", () => {
        // Cancel any ongoing animations on the underline
        gsap.killTweensOf(text.querySelector("div"));

        // Animate the underline to full width
        gsap.to(text.querySelector("div"), {
          duration: 0.5,
          ease: "power2.out",
          width: "100%",
        });
      });

      // Define the animation for when the mouse leaves
      text.addEventListener("mouseleave", () => {
        // Cancel any ongoing animations on the underline
        gsap.killTweensOf(text.querySelector("div"));

        // Animate the underline back to zero width
        gsap.to(text.querySelector("div"), {
          duration: 0.5,
          ease: "power2.out",
          width: 0,
        });
      });
    });
  }, []);

  return (
    <div className="container">
      <div className="inner-container">
        <div className="spacer" />
        <Navigation />
        <div className="content">
          <div className="main-content">
            <Landing />
            <CallToActionRow />
            <Services />
            <div className="review-section">
              <ReviewCard
                name="David Johnson"
                date="June 12, 2022"
                text="I was impressed with the quality of service I received from Trim. The barber was professional, friendly, and did an excellent job. I'll definitely be using this app again."
              />
              <ReviewCard
                name="Sarah Thompson"
                date="July 5, 2022"
                text="I had a great experience with Trim. The barber arrived on time, was very skilled, and gave me a fantastic haircut. The convenience of having a barber come to my home was a game-changer."
              />
              <ReviewCard
                name="Michael Davis"
                date="August 20, 2022"
                text="Trim is a game-changer. I love being able to get a professional haircut in the comfort of my own home. The barbers are friendly, skilled, and provide top-notch service. I highly recommend this app."
              />
            </div>
            <FAQLabel />
            <FAQItems />
            <ButtonBanner />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
