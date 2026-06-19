import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {movies} from "../data/movies";

export default function Movies() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="mb-8 text-center text-5xl font-bold text-white">
          Movies Collection
        </h1>

        <input
          type="text"
          placeholder="Search movie..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="mb-10 w-full rounded-xl p-4"
        />

        <div className="grid gap-8 md:grid-cols-3">
          {filteredMovies.map((movie) => (
            <div
              key={movie.id}
              className="overflow-hidden rounded-3xl bg-white"
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-bold">
                  {movie.title}
                </h2>

                <p>{movie.genre}</p>

                <p>⭐ {movie.rating}</p>

                <button
                  onClick={() =>
                    navigate(`/movie/${movie.id}`)
                  }
                  className="mt-5 w-full rounded-xl bg-blue-600 py-3 text-white"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}