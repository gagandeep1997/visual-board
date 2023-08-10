import React, { useEffect, useRef } from "react";
import finalcareerimg from "../assests/images/career-final-img.png";

export default function FinalPage() {
  const animationref1 = useRef();
  const animationref2 = useRef();

  let borderClass = "border border-dark rounded-pill p-3 w-50";

  useEffect(() => {
    for (let i = 1; i <= 2; i++) {
      setTimeout(() => {
        if (i === 1) {
          animationref1.current.className = borderClass + " d-block card-ltr";
        } else {
          animationref2.current.className = borderClass + " d-block card-rtl";
        }
      }, i * 2000);
    }
  });
  return (
    <div
      className="container-fluid animation"
      style={{ backgroundImage: `url(${finalcareerimg})` }}
    >
      <div className="row message-container">
        <div className={borderClass + " card-rtl"}>
          <h3 className="fw-medium text-center">
            Money without brains is always dangerous
          </h3>
        </div>
      </div>
      <div className="row message-container">
        <div className={borderClass + " d-none"} ref={animationref1}>
          <h3 className="fw-medium text-center">
            A successful man is one who makes more money than his wife can
            spend.
          </h3>
        </div>
      </div>
      <div className="row message-container">
        <div className={borderClass + " d-none"} ref={animationref2}>
          <h3 className="fw-medium text-center">
            Digitas will give you bonus with every month's salary so dont'ry.
          </h3>
        </div>
      </div>
    </div>
  );
}
