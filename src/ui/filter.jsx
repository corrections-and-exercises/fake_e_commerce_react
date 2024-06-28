export default function Filter({ filter, setFilter }) {
  const options = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  return (
    <div className="mb-4 mt-2 flex justify-center gap-4">
      <div className="join">
        {options.map((option) => {
          return (
            <button
              onClick={() => setFilter(option)}
              key={option}
              className={`btn join-item ${filter === option ? "btn-active" : ""}`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
