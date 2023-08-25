import React from "react";
import healthGif from "../assests/images/self-love.gif";
import careerGif from "../assests/images/path.gif";
import travelGif from "../assests/images/airplane.gif";
import moneyGif from "../assests/images/euro.gif";
import happyGif from "../assests/images/happy.gif";
import Card from "../components/Card";

export default function WelcomeSurveyPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <p className="survey-text fw-bold position-absolute border rounded-circle border-secondary">
            Take survey{" "}
          </p>
          <Card
            imageSrc={healthGif}
            link="/health"
            classes="position-absolute health-gif"
            title="Health"
          />
          <Card
            imageSrc={careerGif}
            link="/career"
            classes="position-absolute career-gif"
            title="Career"
          />
          <Card
            imageSrc={travelGif}
            link="/travel"
            classes="position-absolute travel-gif"
            title="Travel"
          />
          <Card
            imageSrc={moneyGif}
            link="/money"
            classes="position-absolute money-gif"
            title="Money"
          />
          <Card
            imageSrc={happyGif}
            link="/happy"
            classes="position-absolute happy-gif"
            title="Happy"
          />
        </div>
      </div>
    </div>
  );
}
