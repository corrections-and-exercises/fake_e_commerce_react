export default function Filter({ filter, setFilter }) {
  const options = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  return (
    <div className="join mb-4 mt-2 flex justify-center">
      {options.map((option) => {
        return (
          <button
            onClick={() => setFilter(option)}
            key={option}
            className={`btn btn-outline join-item ${filter === option ? "btn-active" : ""}`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
