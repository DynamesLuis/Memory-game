export default function DigimonCard({ digimon, onSelect }) {
  return (
    <div
      onClick={() => onSelect(digimon.id)}
      className="
      w-44
      p-2
      bg-sky-950
      border-2 border-sky-500
      rounded-xl
      shadow-lg shadow-sky-500/20
      transition-all duration-200
      hover:scale-105
      hover:border-sky-300
      hover:shadow-sky-400/40
      cursor-pointer
    "
    >
      <div className="flex flex-col gap-2">
        <div className="bg-sky-900 rounded-md p-1">
          <img
            src={digimon.image}
            alt={digimon.name}
            className="w-full aspect-square object-contain"
          />
        </div>

        <div
          className="
          bg-sky-700
          border border-sky-400
          rounded-md
          p-2
          text-center
        "
        >
          <p className="text-white font-bold">{digimon.name}</p>
        </div>
      </div>
    </div>
  );
}
