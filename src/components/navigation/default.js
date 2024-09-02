import "./default.css"
import image_9 from "../../assets/Depth 4, Frame 1.png";
import icon_0 from "../../assets/icon_0.png";
import icon_logo from "../../assets/icon_logo.png"

export default function Navigation() {

    return <div className="navbar">
    <div className="navbar-logo">
      <div className="navbar-logo-icon" style={{backgroundImage: 'url("{}")'.format(icon_logo)}}>
      </div>
      <div className="navbar-logo-text">
        <div>Trim</div>
      </div>
    </div>
    <div className="navbar-links">
      <div className="navbar-button-group">
        <div className="navbar-button hover-animation-1">
          <div className="navbar-button-text ">
            <div>List your business</div>
          </div>
        </div>
        <div className="navbar-icon">
          <div className="navbar-icon-image">
            <img src={icon_0} alt="icon" />
          </div>
        </div>
      </div>
      <div className="navbar-profile" style={{ backgroundImage: `url(${image_9})` }}></div>
    </div>
  </div>;
};