import { imgAssets } from "../assets";
import DifficultyButton from "../components/ui/DifficultyButton";
import { difficulties } from "../constants/gameConfig";

export default function HomePage({
  highScores,
  onStartGame,
  onSelectDifficulty,
  selectedDifficulty,
}) {
  return (
    <main className="min-h-screen grid grid-cols-2">
      <div className="flex flex-col items-center justify-center pr-4 translate-x-25">
        <img src={imgAssets.logo} alt="Game logo" className="w-110" />
        <div className="relative w-80 h-72 mx-auto">
          <img
            src={imgAssets.gabumon}
            alt="Gabumon"
            className="absolute bottom-0 -left-10 w-60 object-contain z-10 -rotate-6"
          />
          <img
            src={imgAssets.biyomon}
            alt="Biyomon"
            className="absolute bottom-0 -right-10 w-60 object-contain z-10 rotate-6"
          />
          <img
            src={imgAssets.agumon}
            alt="Agumon"
            className="absolute -top-10 left-1/2 -translate-x-1/2  w-60 object-contain"
          />
        </div>
      </div>
      <div className="h-full flex flex-col items-center justify-center gap-5 pl-4 -translate-x-30">
        <div className="flex flex-col items-center gap-3 rounded-xl border-2 border-sky-500 bg-slate-950/80 p-3 shadow-lg shadow-sky-500/20">
          {/* Header */}
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-yellow-400"
            >
              <path d="M8 21h8m-4-4v4m-7-18h14v7a7 7 0 0 1-14 0V3Z" />
              <path d="M5 5H3v2a5 5 0 0 0 5 5m11-7h2v2a5 5 0 0 1-5 5" />
            </svg>

            <span className="text-sm font-bold tracking-wider text-sky-300">
              HIGH SCORES
            </span>
          </div>

          {/* Scores */}
          <div className="grid w-full grid-cols-3 gap-2">
            {difficulties.map((difficulty) => (
              <div
                key={difficulty.id}
                className="flex flex-col items-center gap-1 rounded-lg bg-sky-950/60 p-2"
              >
                <span className="text-xs font-bold uppercase text-sky-300">
                  {difficulty.label}
                </span>

                <span className="text-xl font-extrabold text-white">
                  {highScores[difficulty.id] === null
                    ? "--"
                    : highScores[difficulty.id]}
                </span>

                <span className="text-[10px] text-sky-400">
                  {highScores[difficulty.id] === null
                    ? "No record"
                    : "Personal best"}
                </span>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={onStartGame}
          className="relative grid grid-cols-1 items-center justify-items-center w-52 h-15 rounded-full border-2 border-amber-500 bg-amber-300 text-[30px] font-bold text-sky-800 shadow-[0_5px_0_#b45309] cursor-pointer hover:bg-amber-200 hover:border-amber-400 hover:shadow-[0_7px_0_#b45309] hover:-translate-y-1 active:translate-y-1 active:shadow-none transition-all duration-150"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="absolute left-10 text-sky-800 transition-transform duration-200 group-hover:scale-110"
          >
            <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" />
          </svg>

          <span className="col-start-1 row-start-1 tracking-wider">PLAY</span>
        </button>
        {difficulties.map((difficulty) => {
          return (
            <DifficultyButton
              key={difficulty.id}
              difficulty={difficulty}
              onSelectDifficulty={onSelectDifficulty}
              selectedDifficulty={selectedDifficulty}
            />
          );
        })}
      </div>
    </main>
  );
}
