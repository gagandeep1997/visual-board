import React from "react";
import { useNavigate } from "react-router-dom";
import logo_image from "../assests/images/Digitas_logo_lockup.png";

export default function WelcomePage() {
  const navigate = useNavigate();
  const nextPageHandler = () => {
    navigate("/homepage");
  }

  return (
    <div className="container-fluid homepage">
      <div className="row">
        <div className="col-12 text-center">
          <div className="homepage-logo mx-auto bg-white mt-4 shadow p-3 rounded-circle">
            <img src={logo_image} alt="logo_digitas" width="150" height="150"/>
          </div>
        </div>
      </div>
      <h1 className="logo fw-light text-center text-dark">
        Are you a Day Dreamer or a Night Dreamer?
      </h1>
      <div className="d-flex flex-row justify-content-evenly pt-5 mt-5">
        <button
          type="button"
          className="btn btn-info btn-lg shadow"
          style={{ width: "200px" }}
          onClick={nextPageHandler}
        >
          Yes
        </button>
        <button
          type="button"
          className="btn btn-warning btn-lg shadow fs-2"
          style={{ width: "200px" }}
          onClick={nextPageHandler}
        >
          हा
        </button>
        <button
          type="button"
          className="btn btn-dark btn-lg shadow"
          style={{ width: "200px" }}
          onClick={nextPageHandler}
        >
          Definitely
        </button>
      </div>
    </div>
  );
}
