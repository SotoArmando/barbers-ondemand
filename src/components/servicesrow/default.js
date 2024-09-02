import CardComponent from "../card/default";
import "./default.css";

import image_1 from "../../assets/Depth 7, Frame 0-1.png";
import image_2 from "../../assets/Depth 7, Frame 0-2.png";
import image_3 from "../../assets/Depth 7, Frame 0-3.png";
import image_4 from "../../assets/Depth 7, Frame 0.png";

export default function Services() {
  return (
    <div className="services-row-container">
      <div className="services-row">
        <CardComponent
          imageSrc={image_1}
          title="Professional barbers"
          description="Our barbers are licensed, experienced professionals who are committed to providing you with the best possible experience."
        />
        <CardComponent
          imageSrc={image_2}
          title="Quality haircuts"
          description="We take pride in delivering top-notch haircuts that are tailored to your needs and style."
        />
        <CardComponent
          imageSrc={image_3}
          title="Convenient service"
          description="With Trim, you can get a great haircut wherever you are, whenever you need it. It's that simple."
        />
        <CardComponent
          imageSrc={image_4}
          title="Happy customers"
          description="Don't just take our word for it. See what our customers have to say about their Trim experience."
        />
      </div>
    </div>
  );
}
