import { Link, useParams } from "react-router-dom";
import students from "../data/students";

export default function StudentDetails() {
  const { id } = useParams();

  const student = students.find(
    (student) => student.id === Number(id)
  );

  if (!student) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950">
        <div className="rounded-3xl border border-red-500/20 bg-red-500/10 p-10 text-center">
          <h2 className="text-4xl font-bold text-red-500">
            Student Not Found
          </h2>

          <Link
            to="/students"
            className="mt-6 inline-block rounded-xl bg-red-600 px-6 py-3 text-white"
          >
            Back to Students
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm">
          <div className="grid lg:grid-cols-2">
            <div className="relative">
              <img
                src={student.image}
                alt={student.name}
                className="h-full min-h-[500px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-8 left-8">
                <span className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white">
                  Student ID : {student.id}
                </span>

                <h1 className="mt-4 text-4xl font-bold text-white">
                  {student.name}
                </h1>

                <p className="mt-2 text-lg text-gray-300">
                  {student.course}
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 lg:p-12">
              <div>
                <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm text-orange-400">
                  Student Information
                </span>

                <h2 className="mt-6 text-4xl font-bold text-white">
                  Academic Profile
                </h2>

                <div className="mt-10 space-y-5">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-gray-400">
                      Full Name
                    </p>

                    <h3 className="mt-1 text-xl font-semibold text-white">
                      {student.name}
                    </h3>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-gray-400">
                      Course
                    </p>

                    <h3 className="mt-1 text-xl font-semibold text-white">
                      {student.course}
                    </h3>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-gray-400">
                      Email Address
                    </p>

                    <h3 className="mt-1 text-xl font-semibold text-white">
                      {student.email}
                    </h3>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-gray-400">
                      City
                    </p>

                    <h3 className="mt-1 text-xl font-semibold text-white">
                      {student.city}
                    </h3>
                  </div>
                </div>

                <Link
                  to="/students"
                  className="mt-8 inline-flex items-center rounded-xl bg-gradient-to-r from-orange-500 to-red-600 px-8 py-3 font-semibold text-white transition hover:scale-105"
                >
                  Back to Students
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}