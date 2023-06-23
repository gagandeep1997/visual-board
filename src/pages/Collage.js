import React from "react";
import Travel from "../assests/images/travel.jpg";
import Health from "../assests/images/health.jpg";
import Career from "../assests/images/career.jpg";
import Happy from "../assests/images/happy.jpg";
import Money from "../assests/images/money.jpg";

export default function Collage() {
  return (
    <div className="m-5 px-5">
      <img src={Travel} alt="" width="400" height="250" />
      <img src={Health} alt="" width="300" height="250" />
      <img src={Career} alt="" width="400" height="250" />
      <div>
        <img src={Happy} alt="" width="500" height="300" />
        <img src={Money} alt="" width="600" height="300" />
      </div>
    </div>
  );
}
