import React from "react";
import Travel from "../assests/images/travel.jpg";
import Health from "../assests/images/health.jpg";
import Career from "../assests/images/career.jpg";
import Happy from "../assests/images/happy.jpg";
import Money from "../assests/images/money.jpg";

export default function Collage() {
  return (
    <div className="collage">
      <div className="container my-5">
        <div className="row">
          <div className="col-4 mb-4">
            <img src={Travel} alt="" width="100%" />
          </div>
          <div className="col-4 mb-4">
            <img src={Health} alt="" width="100%" />
          </div>
          <div className="col-4 mb-4">
            <img src={Career} alt="" width="100%" />
          </div>
          <div className="col-6 mb-4">
            <img src={Happy} alt="" width="100%" />
          </div>
          <div className="col-6 mb-4">
            <img src={Money} alt="" width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
}
