import React from 'react';
import './review_card.css';
import icon_star from '../../assets/icon_star.png'
const ReviewCard = ({ name, date, text }) => {
  return (
    <div className="review-card">
      <div className="review-header">
        <div className="review-name">{name}</div>
        <div className="review-date">{date}</div>
      </div>
      <div className="review-rating">
        <div className="rating-bar">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="rating-star">
              <img src={icon_star} />
            </div>
          ))}
        </div>
      </div>
      <div className="review-text">{text}</div>
    </div>
  );
};

export default ReviewCard;
