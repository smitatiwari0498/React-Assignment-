import { useNavigate, useParams } from "react-router-dom";
import { movies } from "../data/movies";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find(
    (item) => item.id === Number(id)
  );

  if (!movie) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950">
        <h1 className="text-4xl font-bold text-red-500">
          Movie Not Found
        </h1>
      </div>
    );
  }

  const nextMovie = movies.find(
    (item) => item.id === Number(id) + 1
  );

  return (
    <section className="min-h-screen bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
          <img
            src={movie.poster}
            alt={movie.title}
            className="h-96 w-full object-cover"
          />

          <div className="p-8">
            <h1 className="text-5xl font-bold">
              {movie.title}
            </h1>

            <div className="mt-6 space-y-2 text-lg">
              <p>
                <strong>Year:</strong> {movie.year}
              </p>

              <p>
                <strong>Genre:</strong> {movie.genre}
              </p>

              <p>
                <strong>Rating:</strong> ⭐ {movie.rating}
              </p>
            </div>

            <p className="mt-6 text-gray-700">
              {movie.description}
            </p>

            {movie.trailer && (
              <div className="mt-10">
                <h2 className="mb-4 text-3xl font-bold">
                  Official Trailer
                </h2>

                <div className="overflow-hidden rounded-2xl">
                  <iframe
                    className="h-[500px] w-full"
                    src={movie.trailer}
                    title={movie.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/movies")}
                className="rounded-xl bg-slate-900 px-6 py-3 text-white"
              >
                Back to Movies
              </button>

              {nextMovie && (
                <button
                  onClick={() =>
                    navigate(`/movie/${nextMovie.id}`)
                  }
                  className="rounded-xl bg-black px-6 py-3 text-white"
                >
                  Next Movie
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}