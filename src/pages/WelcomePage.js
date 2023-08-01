import React from "react";
import logo_image from "../assests/images/Digitas_logo_lockup.png";
import Button from "../components/Button";

export default function WelcomePage() {
  return (
    <div className="container-fluid welcome">
      <div className="row">
        <div className="col-12 text-center">
          <div className="welcome-logo mx-auto bg-white mt-5 shadow p-4 rounded-circle">
            <img src={logo_image} alt="logo of digitas" />
          </div>
        </div>
      </div>
      <h1 className="welcome-heading fw-light text-center text-dark">
        Are you a Day Dreamer or a Night Dreamer?
      </h1>
      <div
        className="d-flex flex-column flex-md-row btn-container justify-content-evenly align-items-center"
        role="list"
      >
        <Button title="Yes" url="/homepage" btnType="btn-info" />
        <Button title="हा" url="/homepage" btnType="btn-warning fs-2" />
        <Button title="Definitely" url="/homepage" btnType="btn-dark" />
      </div>
    </div>
  );
}
