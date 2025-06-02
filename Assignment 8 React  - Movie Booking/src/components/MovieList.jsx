import { useEffect, useState } from "react";

const MovieList = ({ onMovieClick }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows?page=1")
      .then((res) => res.json())
      .then((data) => setMovies(data.slice(0, 16))); // First 16 shows
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center">Select a Movie</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-white border border-gray-200 rounded shadow hover:shadow-lg transition cursor-pointer flex flex-col"
            onClick={() => onMovieClick(movie)}
          >
            <img
              src={movie.image ? movie.image.medium : "https://via.placeholder.com/150x220?text=No+Image"}
              alt={movie.name}
              className="rounded-t w-full object-cover"
              style={{ height: "220px" }}
            />
            <div className="p-2 flex-1 flex items-center justify-center">
              <p className="text-center font-semibold">{movie.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
