import "./default.css";

const CardComponent = ({ imageSrc, title, description }) => {
  return (
    <div className="card-container">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0rem",
          height: "13.9375rem",
          width: "unset",
          justifyContent: "start",
          alignItems: "stretch",
          borderRadius: "0.75rem",
          overflow: "hidden",
        }}
      >
        <img
          src={imageSrc}
          alt={title}
          className="card-image hover-animation-0"
        />
      </div>
      <div className="card-content">
        <div className="card-title">{title}</div>
        <div className="card-description">{description}</div>
      </div>
    </div>
  );
};

export default CardComponent;
