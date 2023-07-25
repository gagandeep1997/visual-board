import React from "react";
import { Link } from "react-router-dom";
import healthGif from "../assests/images/self-love.gif";
import careerGif from "../assests/images/path.gif";
import travelGif from "../assests/images/airplane.gif";
import moneyGif from "../assests/images/euro.gif";
import happyGif from "../assests/images/happy.gif";

export default function WelcomeSurveyPage() {
  return (
    <div className="container survey-page">
      <div className="row">
        <div className="col-12">
          <p className="survey-text fw-bold position-absolute border rounded-circle border-secondary">
            Go to Survey Questions{" "}
          </p>
          <Link to="/health">
            <img
              src={healthGif}
              className="position-absolute health-gif"
              alt="123"
              width="100px"
              height="100px"
            />
          </Link>
          <Link to="/career">
            <img
              src={careerGif}
              className="position-absolute career-gif"
              alt="123"
              width="100px"
              height="100px"
            />
          </Link>
          <Link to="/travel">
            <img
              src={travelGif}
              className="position-absolute travel-gif"
              alt="123"
              width="100px"
              height="100px"
            />
          </Link>
          <Link to="/money">
            <img
              src={moneyGif}
              className="position-absolute money-gif"
              alt="123"
              width="100px"
              height="100px"
            />
          </Link>
          <Link to="/happy">
            <img
              src={happyGif}
              className="position-absolute happy-gif"
              alt="123"
              width="100px"
              height="100px"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
