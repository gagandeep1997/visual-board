import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import HomePage from "./pages/HomePage";
import WelcomeSurveyPage from "./pages/WelcomeSurveyPage";
import "./App.css";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <WelcomePage />,
    },
    {
      path: "/homepage",
      element: <HomePage />,
    },
    {
      path: "/surveyhome",
      element: <WelcomeSurveyPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

// {/* {page === "1" ? <HomePage setPage={setPage} /> : <></>}
//       {page === "2" ? <Collage setPage={setPage} /> : <></>}
//       {page === "3" ? <SurveyPage /> : <></>} */}
