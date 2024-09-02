import "./default.css"

export default function Reviews() {
    return <div className="reviews-container">
      <div className="review-card">
        <div className="review-header">
          <div className="review-name">David Johnson</div>
          <div className="review-date">June 12, 2022</div>
        </div>
        <div className="rating-container">
          <div className="rating-star">
            <div className="filled"></div>
          </div>
          <div className="rating-star">
            <div className="filled"></div>
          </div>
          <div className="rating-star">
            <div className="filled"></div>
          </div>
          <div className="rating-star">
            <div className="filled"></div>
          </div>
          <div className="rating-star">
            <div className="filled"></div>
          </div>
        </div>
        <div className="review-text">
          I was impressed with the quality of service I received from Trim. The barber was professional, friendly, and did an excellent job. I'll definitely be using this app again.
        </div>
      </div>
    </div>;
    
};