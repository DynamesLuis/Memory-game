import HomePage from "./pages/HomePage";
import "./index.css";
import { imgAssets } from "./assets";
import GamePage from "./pages/GamePage";
import { useEffect, useState } from "react";
import { isValidHighScores } from "./utils/validateJson";

function App() {
  const [pageDisplayed, setPageDisplayed] = useState("Home");
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [highScores, setHighScores] = useState(() => {
    const defaultHighScores = {
      1: 0,
      2: 0,
      3: 0,
    };
    try {
      const savedData = localStorage.getItem("highScores");
      if (!savedData) return defaultHighScores;
      const parsedData = JSON.parse(savedData);
      return isValidHighScores(parsedData) ? parsedData : defaultHighScores;
    } catch (error) {
      console.log(error);
      return defaultHighScores;
    }
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

  const handleSetHighScore = (id, newScore) => {
    setHighScores((prev) => ({
      ...prev,
      [id]: Math.max(prev[id], newScore),
    }));
  };

  useEffect(() => {
    localStorage.setItem("highScores", JSON.stringify(highScores));
  }, [highScores]);

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
          onSetHighScore={handleSetHighScore}
        />
      )}
    </div>
  );
}

export default App;
