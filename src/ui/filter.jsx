export default function Filter({ filter, setFilter }) {
  const options = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  return (
    <div className="flex gap-4">
      {options.map((option) => {
        return (
          <button
            className={`rounded border-2 border-purple-200 px-4 py-2 hover:bg-purple-200 active:bg-purple-300 ${filter === option ? "bg-orange-200 hover:bg-orange-200" : ""}`}
            key={option}
            onClick={() => setFilter(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
