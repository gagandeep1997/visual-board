import React from "react";
import logo_image from "../assests/images/Digitas_logo_lockup.png";

export default function HomePage({ setShowHomePage }) {
  return (
    <div className="container-fluid homepage">
      <div className="row">
        <div className="col-12 text-center">
          <img
            src={logo_image}
            className="homepage-logo mx-auto bg-white mt-4 shadow p-3"
            alt="logo_digitas"
            width="150"
            height="150"
          />
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
          onClick={() => setShowHomePage(false)}
        >
          Yes
        </button>
        <button
          type="button"
          className="btn btn-warning btn-lg shadow"
          style={{ width: "200px" }}
          onClick={() => setShowHomePage(false)}
        >
          हा
        </button>
        <button
          type="button"
          className="btn btn-success btn-lg shadow"
          style={{ width: "200px" }}
          onClick={() => setShowHomePage(false)}
        >
          Definitely
        </button>
      </div>
    </div>
  );
}
