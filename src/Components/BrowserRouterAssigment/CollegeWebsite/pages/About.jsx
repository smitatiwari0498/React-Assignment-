export default function About() {
  const highlights = [
    {
      title: "Established",
      value: "2003",
      description: "More than two decades of academic excellence.",
    },
    {
      title: "Placement Support",
      value: "100%",
      description: "Dedicated career guidance and placement assistance.",
    },
    {
      title: "Industry Training",
      value: "iBirds",
      description: "Hands-on learning with industry exposure.",
    },
    {
      title: "Programs",
      value: "IT Focused",
      description: "Career-oriented technology education.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-slate-50 py-24">
      
      {/* Background Effects */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-red-200/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-red-300/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Content */}
          <div>
            <span className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700">
              About Star Infotech College
            </span>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 lg:text-5xl">
              Ajmer's First
              <span className="block text-red-700">
                IT Company Based College
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Established in 2003, Star Infotech College is approved by
              the Government of Rajasthan and affiliated with M.D.S.
              University, Ajmer. The institution is recognized for
              delivering industry-oriented IT education with a strong
              focus on practical learning and career development.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Through its training and placement partnership with
              iBirds Software Services Pvt. Ltd., students gain
              real-world industry exposure, internships, live projects,
              and future-ready technical skills.
            </p>

            <button className="mt-8 rounded-xl bg-red-700 px-7 py-3 font-semibold text-white shadow-lg shadow-red-200 transition-all duration-300 hover:scale-105 hover:bg-red-800">
              Learn More
            </button>
          </div>

          {/* Right Side Cards */}
          <div className="grid gap-6 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-white bg-white/80 p-7 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  {item.title}
                </p>

                <h3 className="mt-4 text-4xl font-bold text-red-700 transition group-hover:scale-105">
                  {item.value}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}