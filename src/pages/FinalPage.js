import React from "react";
import finalcareerimg from "../assests/images/career-final-img.png";

export default function FinalPage({ finalMessage }) {
  let borderClass = "border border-dark rounded-pill p-3 w-50";

  return (
    <div
      className="container-fluid animation"
      style={{ backgroundImage: `url(${finalcareerimg})` }}
    >
      <div className="row message-container">
        <div className={borderClass + " card-btt"}>
          <h3 className="fw-medium text-center">{finalMessage}</h3>
        </div>
      </div>
    </div>
  );
}
