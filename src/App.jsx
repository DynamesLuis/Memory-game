import HomePage from "./pages/HomePage";
import "./index.css";
import { imgAssets } from "./assets";
import GamePage from "./pages/GamePage";
import { useState } from "react";

function App() {
  const [pageDisplayed, setPageDisplayed] = useState("Home");
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [highScores, setHighScores] = useState({
    1: null,
    2: null,
    3: null,
  });

  const handleStartClick = () => {
    if (!selectedDifficulty) return;
    setPageDisplayed("Game");
  };

  const handleReturnHome = () => {
    setPageDisplayed("Home");
  };

  const handleSelectDifficulty = (difficulty) => {
    setSelectedDifficulty(difficulty);
  };

  return (
    <div
      className={`min-h-screen bg-cover bg-center bg-no-repeat`}
      style={{ backgroundImage: `url(${imgAssets.bg})` }}
    >
      {pageDisplayed === "Home" ? (
        <HomePage
          onStartGame={handleStartClick}
          selectedDifficulty={selectedDifficulty}
          onSelectDifficulty={handleSelectDifficulty}
          highScores={highScores}
        />
      ) : (
        <GamePage
          onReturnHome={handleReturnHome}
          selectedDifficulty={selectedDifficulty}
        />
      )}
    </div>
  );
}

export default App;
