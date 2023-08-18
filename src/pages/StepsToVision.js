import React from "react";

export default function StepsToVision({
  stepsToVision,
  setShowFinalPage,
  setShowStepsToVisionBoardPage,
}) {
  const showFinalPageClickHandler = () => {
    setShowFinalPage(true);
    setShowStepsToVisionBoardPage(false);
  };
  return (
    <div className="container-fluid vh-100 steps-to-vision-container bg-white">
      <div className="row ms-3 text-center flex-column">
        <h1 className="steps-to-vision__heading fw-bold">
          Steps to achieve your goal
        </h1>
        {stepsToVision.map((step) => (
          <p
            className={`rounded-4 w-50 mx-auto ${step.stepClass} my-3 p-4 fw-medium`}
            key={step.id}
          >
            {step.step}
          </p>
        ))}
      </div>
      <div className="row justify-content-end click-here-msg">
        <div className="col-3 p-0">
          <p className="fw-bold">
            If you are not happy please{" "}
            <span className="fs-1 right-finger">&#128073;&#127997;</span>
            <span
              className="blink-text ps-2"
              onClick={showFinalPageClickHandler}
            >
              Click here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
