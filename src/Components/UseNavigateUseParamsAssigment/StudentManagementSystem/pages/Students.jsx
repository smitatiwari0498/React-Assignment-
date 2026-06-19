import { useNavigate } from "react-router-dom";
import students from "../data/students";

export default function Students() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-400">
            Student Management System
          </span>

          <h1 className="mt-6 text-5xl font-bold text-white">
            Our Students
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Explore student profiles, academic information, and course
            details through a modern and interactive dashboard.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {students.map((student) => (
            <div
              key={student.id}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm transition duration-300 hover:-translate-y-3 hover:border-orange-500/40"
            >
              <div className="relative overflow-hidden">
                <img
                  src={student.image}
                  alt={student.name}
                  className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <span className="rounded-full bg-orange-500 px-4 py-1 text-sm font-semibold text-white">
                    ID: {student.id}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-white">
                  {student.name}
                </h2>

                <p className="mt-3 text-gray-400">
                  {student.course}
                </p>

                <button
                  onClick={() => navigate(`/student/${student.id}`)}
                  className="mt-6 w-full rounded-xl bg-gradient-to-r from-orange-500 to-red-600 py-3 font-semibold text-white transition hover:shadow-lg hover:shadow-orange-500/30"
                >
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}