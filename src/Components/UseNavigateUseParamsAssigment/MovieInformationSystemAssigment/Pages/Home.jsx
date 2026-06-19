export default function Home() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/movie.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold text-white">
          Movie Information System
        </h1>

        <p className="mt-4 text-lg text-gray-300">
          Explore your favorite movies
        </p>
      </div>
    </section>
  );
}