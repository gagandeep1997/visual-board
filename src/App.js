import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import HomePage from "./pages/HomePage";
import WelcomeSurveyPage from "./pages/WelcomeSurveyPage";
import "./App.css";
import SurveyPage from "./pages/SurveyPage";

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
    {
      path: "/career",
      element: <SurveyPage />,
    },
    {
      path: "/happiness",
      element: <SurveyPage />,
    },
    {
      path: "/health",
      element: <SurveyPage />,
    },
    {
      path: "/travel",
      element: <SurveyPage />,
    },
    {
      path: "/money",
      element: <SurveyPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}
