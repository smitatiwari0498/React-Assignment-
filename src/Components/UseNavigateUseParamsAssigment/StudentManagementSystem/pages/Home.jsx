export default function Home() {
  const stats = [
    { value: "500+", label: "Students" },
    { value: "25+", label: "Courses" },
    { value: "50+", label: "Faculty Members" },
    { value: "100%", label: "Digital Records" },
  ];

  const features = [
    {
      title: "Student Profiles",
      description:
        "View complete student information with dynamic routing.",
    },
    {
      title: "Easy Navigation",
      description:
        "Navigate between pages using React Router.",
    },
    {
      title: "Responsive Design",
      description:
        "Optimized for desktop, tablet, and mobile devices.",
    },
  ];

  const topStudents = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
      name: "Priya Sharma",
      course: "BCA Final Year",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
      name: "Rahul Verma",
      course: "BCA Final Year",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500",
      name: "Aman Singh",
      course: "BCA Final Year",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#03071e] via-[#6a040f] to-[#d00000] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">
          <div>
            <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
              Student Management System
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight">
              Manage Students Efficiently
            </h1>

            <p className="mt-6 text-lg text-orange-100">
              A modern platform to manage student records, attendance,
              academic performance, and personal details from a single
              dashboard.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-lg bg-[#ffba08] px-6 py-3 font-semibold text-[#03071e] transition hover:bg-[#faa307]">
                View Students
              </button>

              <button className="rounded-lg border border-[#ffba08] px-6 py-3 font-semibold text-[#ffba08] transition hover:bg-[#ffba08] hover:text-[#03071e]">
                Learn More
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900"
              alt="Students"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border-t-4 border-[#f48c06] bg-white p-6 text-center shadow-lg"
            >
              <h3 className="text-3xl font-bold text-[#d00000]">
                {item.value}
              </h3>

              <p className="mt-2 text-gray-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
                alt="Students"
                className="rounded-3xl shadow-xl"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[#6a040f]">
                About Our Portal
              </h2>

              <p className="mt-6 text-gray-600">
                This Student Management System helps institutions manage
                student information, attendance, courses, and academic
                records efficiently through a modern and user-friendly
                interface.
              </p>

              <p className="mt-4 text-gray-600">
                Built using React and modern web technologies, it provides
                seamless access to data for students, faculty members, and
                administrators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#fff7ed] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-bold text-[#6a040f]">
            Key Features
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-orange-100 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-[#dc2f02] hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold text-[#9d0208]">
                  {feature.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Students */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-bold text-[#6a040f]">
            Our Top Students
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {topStudents.map((student) => (
              <div
                key={student.id}
                className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-xl"
              >
                <img
                  src={student.image}
                  alt={student.name}
                  className="h-72 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#9d0208]">
                    {student.name}
                  </h3>

                  <p className="mt-2 text-gray-600">
                    {student.course}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#9d0208] via-[#dc2f02] to-[#f48c06] py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold">
            Start Managing Students Today
          </h2>

          <p className="mt-4 text-orange-100">
            Access student records, academic information, and performance
            details through a modern management portal.
          </p>

          <button className="mt-8 rounded-lg bg-[#ffba08] px-8 py-3 font-semibold text-[#03071e] transition hover:bg-white">
            Explore Students
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#03071e] py-8 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h3 className="text-xl font-semibold">
            Student Management System
          </h3>

          <p className="mt-2 text-gray-400">
            © 2026 All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}