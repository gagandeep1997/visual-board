import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import Collage from "./pages/Collage";

export default function App() {
  const [showHomepage, setShowHomePage] = useState(true);

  return (
    <div>
      {showHomepage && <HomePage setShowHomePage={setShowHomePage} />}
      {!showHomepage && <Collage />}
    </div>
  );
}
