import React, { useEffect, useState } from "react";

export default function StepsToVision({
  stepsToVision,
  setShowFinalPage,
  setShowStepsToVisionBoardPage,
  clickHereMessage,
}) {
  const showFinalPageClickHandler = () => {
    setShowFinalPage(true);
    setShowStepsToVisionBoardPage(false);
  };

  
  const [stepData, setStepData] = useState(stepsToVision);
  const [selectedSteps, setSelectedSteps] = useState([]);

  const handleStepClick = (index) => {
    if (selectedSteps.includes(index)) {
      // If the step is already selected, do nothing on click
      return;
    }

    setSelectedSteps([...selectedSteps, index]);
  };


  return (
    <div className="container-fluid vh-100 steps-to-vision-container bg-white">
      <div className="row ms-3 text-center flex-column">
        <h1 className="steps-to-vision__heading fw-bold">
          Steps to achieve your goal
        </h1>
        {stepData.map((step, index) => (
        <p
          className={`rounded-4 w-50 mx-auto pr-5 ${step.stepClass} my-3 p-4 fw-medium ${selectedSteps.includes(index) ? 'checked' : ''}`}
          key={step.id}
          onClick={() => handleStepClick(index)}
        >
          <div className="step-info">
            {step.step}
            {selectedSteps.includes(index) && <span className="checked-mark"></span>}
          </div>
         
        </p>
      ))}
      </div>
      <div className="row justify-content-end click-here-msg">
        <div className="col-auto p-0">
          <p className="fw-bold me-5">
            {clickHereMessage} please {" "}
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
