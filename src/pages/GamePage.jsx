import { useEffect, useState } from "react";
import { getData } from "../services/digimonService";
import Loading from "../components/game/Loading";
import DigimonCard from "../components/game/DigimonCard";
import { getCardsToShow } from "../utils/gameUtils";
import GameResultModal from "../components/game/GameResultModal";

export default function GamePage({ onReturnHome, selectedDifficulty }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [characterPool, setCharacterPool] = useState(null);
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [charactersShown, setCharactersShown] = useState([]);
  const [gameStatus, setGameStatus] = useState("playing");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData();
        setCharacterPool(data);
        setCharactersShown(
          getCardsToShow(
            data,
            selectedCharacters,
            selectedDifficulty.cardsShown,
          ),
        );
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleClickedCard = (clickedCard) => {
    if (gameStatus !== "playing") return;

    if (selectedCharacters.includes(clickedCard)) {
      setGameStatus("lost");
    } else {
      const updatedSelectedCharacters = [...selectedCharacters, clickedCard];
      setSelectedCharacters(updatedSelectedCharacters);

      if (updatedSelectedCharacters.length === characterPool.length) {
        setGameStatus("won");
        return;
      }
      setCharactersShown(
        getCardsToShow(
          characterPool,
          updatedSelectedCharacters,
          selectedDifficulty.cardsShown,
        ),
      );
    }
  };

  const handleRestartClick = () => {
    setSelectedCharacters([]);
    setGameStatus("playing");
    setCharactersShown(
      getCardsToShow(characterPool, [], selectedDifficulty.cardsShown),
    );
  };

  return (
    <main className="min-h-screen flex flex-col justify-between text-white p-2">
      <header className="flex justify-around p-4 bg-sky-700 border-2 border-solid border-sky-500 rounded-lg">
        <p className="flex flex-col items-center">
          <span className="text-sm font-medium">High Score</span>
          <span className="text-2xl font-bold">0</span>
        </p>
        <p className="flex flex-col items-center">
          <span className="text-sm font-medium">Your Score</span>
          <span className="text-2xl font-bold">
            {selectedCharacters.length}
          </span>
        </p>
        <p className="flex flex-col items-center">
          <span className="text-sm font-medium">Characters left</span>
          <span className="text-2xl font-bold">
            {selectedCharacters.length}/120
          </span>
        </p>
      </header>

      <div className="flex-1 flex items-center justify-center">
        {isLoading ? (
          <Loading />
        ) : (
          charactersShown.map((digimon) => {
            return (
              <DigimonCard
                digimon={digimon}
                onSelect={handleClickedCard}
                key={digimon.id}
              />
            );
          })
        )}
      </div>

      <footer className="flex justify-between p-4">
        <button
          onClick={onReturnHome}
          className="cursor-pointer border-2 border-solid border-sky-500 bg-sky-700 p-2 rounded-full w-35 h-15 flex items-center justify-center gap-2 hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/30"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#ffffff"
            className="icon icon-tabler icons-tabler-filled icon-tabler-home"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.293 11.707a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883 -.993l.117 -.007z" />
          </svg>
          Menu
        </button>
        <button
          onClick={handleRestartClick}
          className="cursor-pointer border-2 border-solid border-sky-500 bg-sky-700 rounded-full w-35 h-15 flex items-center justify-center gap-2 hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/30"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-reload"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747" />
            <path d="M20 4v5h-5" />
          </svg>
          Restart
        </button>
      </footer>
      {gameStatus !== "playing" && (
        <GameResultModal
          gameStatus={gameStatus}
          score={selectedCharacters.length}
          onRestart={handleRestartClick}
        />
      )}
    </main>
  );
}
