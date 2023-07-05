import React from "react";
import Travel from "../assests/images/travel.jpg";
import Health from "../assests/images/health.jpg";
import Career from "../assests/images/career.jpg";
import Happy from "../assests/images/happy.jpg";
import Money from "../assests/images/money.jpg";

export default function Collage({ setPage }) {
  const goToSurveyPageHandler = () => {
    setPage("3");
  };

  return (
    <div className="collage">
      <div className="container my-5">
        <div className="row">
          <div className="col-4 mb-4" onClick={goToSurveyPageHandler}>
            <img src={Travel} alt="" width="100%" />
          </div>
          <div className="col-4 mb-4" onClick={goToSurveyPageHandler}>
            <img src={Health} alt="" width="100%" />
          </div>
          <div className="col-4 mb-4" onClick={goToSurveyPageHandler}>
            <img src={Career} alt="" width="100%" />
          </div>
          <div className="col-6 mb-4" onClick={goToSurveyPageHandler}>
            <img src={Happy} alt="" width="100%" />
          </div>
          <div className="col-6 mb-4" onClick={goToSurveyPageHandler}>
            <img src={Money} alt="" width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
}
