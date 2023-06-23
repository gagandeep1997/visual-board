import React from "react";
import "./HomePage.css";
import logo_image from "../assests/images/Digitas_logo_lockup.png";

export default function HomePage({ setShowHomePage }) {
  return (
    <div className="homepage">
      <img
        src={logo_image}
        className="mx-auto d-block"
        alt=""
        width="150"
        height="150"
      />
      <h1 className="logo text-center">
        Are you a Day Dreamer or a Night Dreamer?
      </h1>
      <div className="d-flex flex-row justify-content-evenly pt-5 mt-5">
        <button type="button" className="btn btn-light btn-lg rounded-circle" onClick={() => setShowHomePage(false)}>
          Yes
        </button>
        <button type="button" className="btn btn-light btn-lg rounded-circle" onClick={() => setShowHomePage(false)}>
          Haa
        </button>
        <button type="button" className="btn btn-light btn-lg rounded-circle" onClick={() => setShowHomePage(false)} >
          OfCourse
        </button>
      </div>
    </div>
  );
}
