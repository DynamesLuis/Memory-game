import HomePage from "./pages/HomePage";
import "./index.css";
import { imgAssets } from "./assets";
import GamePage from "./pages/GamePage";
import { useState } from "react";

function App() {
  const [pageDisplayed, setPageDisplayed] = useState("Home");

  const handleStartClick = () => {
    setPageDisplayed("Game");
  };

  const handleReturnHome = () => {
    setPageDisplayed("Home");
  };

  return (
    <div
      className={`min-h-screen bg-cover bg-center bg-no-repeat`}
      style={{ backgroundImage: `url(${imgAssets.bg})` }}
    >
      {pageDisplayed === "Home" ? (
        <HomePage onStartGame={handleStartClick} />
      ) : (
        <GamePage onReturnHome={handleReturnHome} />
      )}
    </div>
  );
}

export default App;
