export default function DigimonCard({
  digimon,
  onSelect,
  isFlipped,
  onFlipped,
}) {
  return (
    <div
      onClick={() => onSelect(digimon.id)}
      className="w-44 p-2 bg-sky-950 border-2 border-sky-500 rounded-xl shadow-lg shadow-sky-500/20 transition-all duration-200 hover:scale-105 hover:border-sky-300 hover:shadow-sky-400/40 cursor-pointer perspective-midrange"
    >
      <div
        onTransitionEnd={onFlipped}
        className={`inner grid transform-3d relative transition-transform duration-800 ${isFlipped ? "rotate-y-180" : "rotate-y-0"}`}
      >
        <div className="front col-start-1 row-start-1 flex flex-col gap-2 backface-hidden">
          <div className="bg-sky-900 rounded-md p-1">
            <img
              src={digimon.image}
              alt={digimon.name}
              className="w-full aspect-square object-contain"
            />
          </div>

          <div className="h-14 flex items-center justify-center bg-sky-700 border border-sky-400 rounded-md p-2 text-center">
            <p className="text-white font-bold">{digimon.name}</p>
          </div>
        </div>

        <div className="back col-start-1 row-start-1 backface-hidden rotate-y-180 flex items-center justify-center overflow-hidden rounded-xl border-2 border-cyan-400 bg-gradient-to-br from-blue-950 via-slate-900 to-cyan-950 shadow-lg shadow-cyan-500/20">
          <div className="relative flex h-full w-full items-center justify-center">
            <div className="absolute h-40 w-40 rounded-full border-2 border-cyan-500/20" />
            <div className="absolute h-32 w-32 rounded-full border border-cyan-400/30" />
            <div className="absolute h-24 w-24 rounded-full border border-blue-400/40" />

            <div className="z-10 flex flex-col items-center gap-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-cyan-400 bg-blue-950 shadow-lg shadow-cyan-500/30">
                <span className="text-4xl">✦</span>
              </div>

              <span className="text-xl font-black tracking-widest text-cyan-300 drop-shadow-lg">
                DIGIMON
              </span>

              <span className="text-[10px] font-bold tracking-[0.3em] text-blue-200/70">
                DIGITAL WORLD
              </span>
            </div>

            <div className="absolute left-3 top-3 h-3 w-3 border-l-2 border-t-2 border-cyan-400" />
            <div className="absolute right-3 top-3 h-3 w-3 border-r-2 border-t-2 border-cyan-400" />
            <div className="absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-cyan-400" />
            <div className="absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-cyan-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
