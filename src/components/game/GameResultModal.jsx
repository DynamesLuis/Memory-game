import { imgAssets } from "../../assets";

export default function GameResultModal({ gameStatus, score, onRestart }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#020817]/80 p-4 backdrop-blur-sm">
      {/* Modal */}
      <section
        role="dialog"
        aria-modal="true"
        aria-label="Game result"
        className="relative my-auto w-full max-w-2xl overflow-hidden rounded-3xl border-2 border-cyan-400/60 bg-gradient-to-br from-[#102f60] via-[#0b2148] to-[#07152f] shadow-[0_0_50px_rgba(34,211,238,0.2)]"
      >
        {/* Decorative background */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-blue-500/20 blur-3xl" />

        {/* Digital decoration */}
        <div className="absolute right-5 top-4 text-3xl text-cyan-300/50">
          ✦
        </div>

        <div className="absolute left-5 top-4 text-2xl text-yellow-300/50">
          ✧
        </div>

        <div className="relative z-10 p-5 sm:p-8">
          {/* Header */}
          <div className="mb-5 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-300">
              Digital World
            </p>
          </div>

          {/* Main content */}
          <div className="grid grid-cols-2 items-center gap-3 sm:gap-8">
            {/* Agumon */}
            <div className="flex items-center justify-center">
              {gameStatus === "won" && (
                <img
                  src={imgAssets.agumonWin}
                  alt="You won!"
                  className="h-40 w-full object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.4)] sm:h-64"
                />
              )}
              {gameStatus === "lost" && (
                <img
                  src={imgAssets.agumonLose}
                  alt="You won!"
                  className="h-40 w-full object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.4)] sm:h-64"
                />
              )}
            </div>

            {/* Result and score */}
            <div className="flex flex-col items-center justify-center gap-4">
              {gameStatus === "won" && (
                <img
                  src={imgAssets.winMsg}
                  alt="Game result"
                  className="w-full max-w-[260px] object-contain drop-shadow-[0_5px_15px_rgba(0,0,0,0.3)]"
                />
              )}
              {gameStatus === "lost" && (
                <img
                  src={imgAssets.loseMsg}
                  alt="Game result"
                  className="w-full max-w-[260px] object-contain drop-shadow-[0_5px_15px_rgba(0,0,0,0.3)]"
                />
              )}

              <div className="w-full rounded-2xl border border-cyan-300/30 bg-blue-950/60 p-3 text-center shadow-inner sm:p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-300 sm:text-xs">
                  Final Score
                </p>

                <p className="mt-1 text-3xl font-black text-yellow-300 sm:text-5xl">
                  {score}
                </p>

                <div className="mx-auto mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-400 to-yellow-300" />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <button
              onClick={onRestart}
              className="flex-1 rounded-xl border-b-4 border-orange-600 bg-gradient-to-b from-yellow-300 to-orange-400 px-5 py-3.5 text-sm font-black uppercase tracking-widest text-orange-950 shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-1 hover:brightness-110 active:translate-y-0 active:border-b-0"
            >
              ▶ Play Again
            </button>

            <button className="flex-1 rounded-xl border-2 border-cyan-400/60 bg-blue-900/60 px-5 py-3.5 text-sm font-black uppercase tracking-widest text-cyan-100 transition-all hover:-translate-y-1 hover:border-cyan-300 hover:bg-blue-800 active:translate-y-0">
              Menu
            </button>
          </div>

          {/* Footer */}
          <p className="mt-6 text-center text-[10px] font-medium tracking-[0.3em] text-blue-300/50">
            DIGIMON MEMORY GAME
          </p>
        </div>
      </section>
    </div>
  );
}
