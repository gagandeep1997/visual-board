import React from "react";
import { Link } from "react-router-dom";

export default function Card({ imageSrc, link, classes, title }) {
  return (
    <Link to={link}>
      <div className={`flip-card ${classes}`}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img className="flip-card-icon" src={imageSrc} alt={title} />
          </div>
          <div className="flip-card-back">
            <p className="flip-card-text">{title}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
