export default function DifficultyButton({
  selectedDifficulty,
  difficulty,
  onSelectDifficulty,
}) {
  const selected = selectedDifficulty?.id === difficulty.id;

  return (
    <button
      onClick={() => onSelectDifficulty(difficulty)}
      className={`
        w-52 h-12
        rounded-full
        border-2
        font-bold text-lg tracking-wider
        cursor-pointer

        transition-all duration-200

        ${
          selected
            ? "bg-amber-300 text-sky-900 border-amber-500 shadow-[0_4px_0_#b45309] -translate-y-0.5"
            : "bg-sky-800 text-white border-sky-500 shadow-[0_4px_0_#0c4a6e] hover:bg-sky-600 hover:border-sky-300 hover:-translate-y-0.5"
        }

        active:translate-y-1
        active:shadow-none
      `}
    >
      {difficulty.label}
    </button>
  );
}
