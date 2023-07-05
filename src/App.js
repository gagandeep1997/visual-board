import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import Collage from "./pages/Collage";
import "./App.css";
import SurveyPage from "./pages/SurveyPage";

export default function App() {
  const [page, setPage] = useState("1");

  return (
    <>
      {page === "1" ? <HomePage setPage={setPage} /> : <></>}
      {page === "2" ? <Collage setPage={setPage} /> : <></>}
      {page === "3" ? <SurveyPage /> : <></>}
    </>
  );
}
