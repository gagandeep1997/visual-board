import React, { useState, useEffect, useReducer } from "react";
import { useHref } from "react-router-dom";
import Header from "../components/Header";
import backgroundHappy from "../assests/images/happy.jpg";
import backgroundTravel from "../assests/images/travel1.jpg";
import backgroundHealth from "../assests/images/health2.jpeg";
import backgroundCareer from "../assests/images/career2.jpg";
import backgroundMoney from "../assests/images/money.jpg";
import FinalPage from "./FinalPage";
import StepsToVision from "./StepsToVision";

function reducerfunction(state, action) {
  switch (action.type) {
    case "updateOptionsSelected": {
      return {
        ...state,
        optionsSelected: action.payload,
      };
    }
    case "increaseAnsCompleted": {
      return {
        ...state,
        totalAnswersCompleted: state.totalAnswersCompleted + 1,
        totalProgress:
          ((state.totalAnswersCompleted + 1) / action.payload) * 100,
      };
    }
    case "increaseNoOfOptionsSelected": {
      return {
        ...state,
        optionsSelected: state.optionsSelected + 1,
      };
    }
    case "decreaseAnsCompleted": {
      return {
        ...state,
        totalAnswersCompleted: state.totalAnswersCompleted - 1,
        totalProgress:
          ((state.totalAnswersCompleted - 1) / action.payload) * 100,
      };
    }
    case "decreaseNoOfOptionsSelected": {
      return {
        ...state,
        optionsSelected: state.optionsSelected - 1,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}

export default function SurveyPage() {
  const [activeQuestion, setActiveQuestion] = useState(1);
  const [isChecked, setIsChecked] = useState(false);
  const [questions, setQuestions] = useState();
  const [showFinalPage, setShowFinalPage] = useState(false);
  const [showStepsToVisionBoardPage, setShowStepsToVisionBoardPage] =
    useState(false);
  const [state, dispatch] = useReducer(reducerfunction, {
    totalAnswersCompleted: 0,
    optionsSelected: 0,
    totalProgress: 0,
  });

  let surveypath = useHref();
  let currentBackgroundImage;

  const fetchData = async () => {
    const response = await fetch("./questions.json");
    const data = await response.json();
    return data;
  };

  const nextQuestion = () => {
    if (activeQuestion === questions.question.length) {
      setShowStepsToVisionBoardPage(true);
      return;
    }

    document
      .getElementById(`question-${activeQuestion}`)
      .classList.add("d-none");

    setActiveQuestion((prevstate) => {
      return prevstate + 1;
    });

    const inputs = document.querySelectorAll(
      `#question-${activeQuestion + 1} input`
    );

    let checkFound = false;
    let currentOptionsSelected = 0;
    inputs.forEach((value) => {
      if (value.checked) {
        console.log(value.checked);
        checkFound = true;
        currentOptionsSelected = currentOptionsSelected + 1;
      }
    });
    dispatch({
      type: "updateOptionsSelected",
      payload: currentOptionsSelected,
    });

    if (checkFound) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };

  const prevQuestion = () => {
    document
      .getElementById(`question-${activeQuestion}`)
      .classList.add("d-none");

    setActiveQuestion((prevstate) => {
      return prevstate - 1;
    });

    const inputs = document.querySelectorAll(
      `#question-${activeQuestion - 1} input`
    );

    let checkFound = false;
    let currentOptionsSelected = 0;
    inputs.forEach((value) => {
      if (value.checked) {
        checkFound = true;
        currentOptionsSelected = currentOptionsSelected + 1;
      }
    });
    dispatch({
      type: "updateOptionsSelected",
      payload: currentOptionsSelected,
    });

    if (checkFound) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };

  const optionClickHandler = (e) => {
    if (e.target.checked) {
      if (!isChecked) {
        setIsChecked(true);
      }

      if (state.optionsSelected === 0) {
        dispatch({
          type: "increaseAnsCompleted",
          payload: questions.question.length,
        });
      }

      dispatch({ type: "increaseNoOfOptionsSelected" });
    } else {
      if (state.optionsSelected === 1) {
        dispatch({
          type: "decreaseAnsCompleted",
          payload: questions.question.length,
        });
      }

      dispatch({ type: "decreaseNoOfOptionsSelected" });

      const inputs = document.querySelectorAll(
        `#question-${activeQuestion} input`
      );

      let checkFound = false;
      inputs.forEach((value) => {
        if (value.checked) {
          checkFound = true;
          return;
        }
      });

      if (!checkFound) {
        setIsChecked(false);
      }
    }
  };

  useEffect(() => {
    fetchData().then((data) => {
      let currentPath = surveypath.slice(1);
      data.forEach((value) => {
        if (value.slug === currentPath) {
          setQuestions(value);
        }
      });
    });
  }, [surveypath]);

  useEffect(() => {
    if (questions) {
      document
        .getElementById(`question-${activeQuestion}`)
        .classList.remove("d-none");
    }
  }, [activeQuestion, questions]);

  if (questions) {
    if (questions.title === "Career") {
      currentBackgroundImage = backgroundCareer;
    } else if (questions.title === "Money") {
      currentBackgroundImage = backgroundMoney;
    } else if (questions.title === "Health") {
      currentBackgroundImage = backgroundHealth;
    } else if (questions.title === "Travel") {
      currentBackgroundImage = backgroundTravel;
    } else {
      currentBackgroundImage = backgroundHappy;
    }
  }

  return (
    questions && (
      <>
        {!showFinalPage && !showStepsToVisionBoardPage && (
          <div
            className="container-fluid survey-page"
            style={{ backgroundImage: `url(${currentBackgroundImage})` }}
          >
            <div className="row">
              <div
                className="progress p-0"
                role="progressbar"
                aria-label="Animated striped example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  style={{ width: `${state.totalProgress}%` }}
                ></div>
              </div>
            </div>
            <div className="row">
              <div className="container new-bg-light">
                <Header title={questions.title} classes="category-heading" />
                <form>
                  <div className="row justify-content-center">
                    <div className="col-12 col-md-8">
                      {questions &&
                        questions.question.map((question) => (
                          <div
                            key={question.id}
                            className="row d-none"
                            id={`question-${question.questionno}`}
                          >
                            <h2 className="question-heading text-center py-5 fw-light">
                              {question.questionname}
                            </h2>
                            <div className="row justify-content-center">
                              <div className="col-12 col-md-6">
                                <div className="row">
                                  {question.options.map((option) => (
                                    <div key={option} className="col-12 my-3 text-center">
                                      <input
                                        type="checkbox"
                                        className="btn-check"
                                        id={option}
                                        autoComplete="off"
                                        onClick={optionClickHandler}
                                      />
                                      <label
                                        className="btn btn-outline-dark w-100 rounded-pill p-2 fs-3 btn-option"
                                        htmlFor={option}
                                      >
                                        {option}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      <div className="row mt-5">
                        <div className="col-12 text-center">
                          <button
                            type="button"
                            className="btn btn-outline-danger me-md-3 px-5 fs-3 mb-3"
                            onClick={prevQuestion}
                            disabled={activeQuestion === 1 ? true : false}
                          >
                            Back a step
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger px-5 fs-3 mb-3"
                            onClick={nextQuestion}
                            disabled={!isChecked}
                          >
                            {activeQuestion !== questions.question.length
                              ? "Next question"
                              : "Submit"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
        {showStepsToVisionBoardPage && !showFinalPage && (
          <StepsToVision
            stepsToVision={questions.steps}
            setShowFinalPage={setShowFinalPage}
            setShowStepsToVisionBoardPage={setShowStepsToVisionBoardPage}
            clickHereMessage={questions.clickHereMsg}
          />
        )}
        {!showStepsToVisionBoardPage && showFinalPage && (
          <FinalPage finalMessage={questions.finalMsg} />
        )}
      </>
    )
  );
}
