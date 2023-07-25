import React, { useState, useEffect } from "react";
import { useNavigate, useHref } from "react-router-dom";
import Header from "../components/Header";

export default function SurveyPage() {
  const [activeQuestion, setActiveQuestion] = useState(1);
  const [questions, setQuestions] = useState();
  const navigate = useNavigate();
  let surveypath = useHref();

  const fetchData = async () => {
    const response = await fetch("./questions.json");
    const data = await response.json();
    return data;
  };

  const nextQuestion = () => {
    if (activeQuestion === questions.question.length) {
      navigate("../surveyhome");
    }
    document
      .getElementById(`question-${activeQuestion}`)
      .classList.add("d-none");
    setActiveQuestion((prevstate) => {
      return prevstate + 1;
    });
  };

  const prevQuestion = () => {
    document
      .getElementById(`question-${activeQuestion}`)
      .classList.add("d-none");
    setActiveQuestion((prevstate) => {
      return prevstate - 1;
    });
  };

  useEffect(() => {
    fetchData().then((data) => {
      let currentPath = surveypath.slice(1);
      console.log(currentPath);
      data.forEach((value) => {
        console.log(value);
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

  console.log(questions);

  return (
    questions && (
      <div className="container">
        <Header title={questions.title} classes="my-5" />
        <form>
          <div className="row justify-content-center">
            <div className="col-8">
              {questions &&
                questions.question.map((question) => (
                  <div
                    key={question.questionno}
                    className="row d-none"
                    id={`question-${question.questionno}`}
                  >
                    <h2 className="text-center py-5 fw-light">
                      {question.questionname}
                    </h2>
                    {question.options.map((option) => (
                      <div key={option} className="col-6 mb-3">
                        <input
                          type="checkbox"
                          className="btn-check"
                          id={option}
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-outline-primary w-100 rounded-pill p-2"
                          htmlFor={option}
                        >
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                ))}
              <div className="row mt-4">
                <div className="col-12 text-center">
                  <button
                    type="button"
                    className="btn btn-warning me-2 p-3"
                    onClick={prevQuestion}
                    disabled={activeQuestion === 1 ? true : false}
                  >
                    <i className="fa-solid fa-arrow-left"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning p-3"
                    onClick={nextQuestion}
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  );
}
