import React from "react";
import { useNavigate } from "react-router-dom";
import visionBoardImg from "../assests/images/vision-board-final.png";

export default function FinalPage({ finalMessage }) {
  const navigate = useNavigate();
  let borderClass = "border border-2 border-dark rounded-pill p-3 w-50";

  return (
    <div
      className="container-fluid animation"
      style={{ backgroundImage: `url(${visionBoardImg})` }}
    >
      <div className="row message-container">
        <div className={borderClass + " card-btt"}>
          <h3 className="fw-bold text-center" dangerouslySetInnerHTML={{ __html: finalMessage}}></h3>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <button
            type="button"
            className="btn btn-success btn-lg fw-bold z-1 fs-2 position-absolute back-to-category-btn"
            onClick={() => navigate("../surveyhome")}
          >
            Back to categories <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
