import HomePage from "./pages/HomePage";
import "./index.css";
import { imgAssets } from "./assets";
import GamePage from "./pages/GamePage";
import { useState } from "react";

function App() {
  const [pageDisplayed, setPageDisplayed] = useState("Home");

  return (
    <div
      className={`min-h-screen bg-cover bg-center bg-no-repeat`}
      style={{ backgroundImage: `url(${imgAssets.bg})` }}
    >
      {pageDisplayed === "Home" ? <HomePage /> : <GamePage />}
    </div>
  );
}

export default App;
