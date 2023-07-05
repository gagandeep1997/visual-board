import React from "react";
import healthGif from "../assests/images/self-love.gif";
import careerGif from "../assests/images/path.gif";
import travelGif from "../assests/images/airplane.gif";
import moneyGif from "../assests/images/euro.gif";

export default function SurveyPage() {
  return (
    <div className="container survey-page">
      <div className="row">
        <div className="col-12">
          <p className="survey-text fw-bold position-absolute border rounded-circle border-secondary">
            Go to Survey Questions{" "}
          </p>
          <img
            src={healthGif}
            className="position-absolute health-gif start-50"
            alt="123"
            width="100px"
            height="100px"
          />
          <img
            src={careerGif}
            className="position-absolute career-gif"
            alt="123"
            width="100px"
            height="100px"
          />
          <img
            src={travelGif}
            className="position-absolute travel-gif"
            alt="123"
            width="100px"
            height="100px"
          />
          <img
            src={moneyGif}
            className="position-absolute money-gif"
            alt="123"
            width="100px"
            height="100px"
          />
        </div>
      </div>
    </div>
  );
}
