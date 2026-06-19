export default function Home() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-slate-50">
      
      {/* Background Blur Effects */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-red-200/30 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-red-300/20 blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Content */}
          <div>
            <span className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700">
              Admissions Open 2026
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 lg:text-7xl">
              Build Your Future With
              <span className="mt-2 block text-red-700">
                Star Infotech College
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              Empowering students with industry-focused education,
              cutting-edge technology skills, and real-world career
              opportunities to thrive in the digital era.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-xl bg-red-700 px-7 py-3 font-semibold text-white shadow-lg shadow-red-200 transition-all duration-300 hover:scale-105 hover:bg-red-800">
                Explore Programs
              </button>

              <button className="rounded-xl border border-slate-300 bg-white px-7 py-3 font-semibold text-slate-700 transition-all duration-300 hover:bg-slate-100">
                Contact Us
              </button>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-3 gap-8">
              <div>
                <h3 className="text-3xl font-bold text-red-700">95%</h3>
                <p className="mt-1 text-slate-500">Placement Rate</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-red-700">1500+</h3>
                <p className="mt-1 text-slate-500">Students</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-red-700">20+</h3>
                <p className="mt-1 text-slate-500">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative">
            
            {/* Main Image */}
            <div className="overflow-hidden rounded-[32px] border border-white bg-white p-3 shadow-2xl">
              <img
                src="https://cache.careers360.mobi/media/colleges/social-media/media-gallery/13099/2021/2/1/Campus%20View%20of%20Star%20Infotech%20College%20Ajmer_Campus-View.jpg"
                alt="Star Infotech College"
                className="h-[550px] w-full rounded-[24px] object-cover"
              />
            </div>

            {/* Courses Card */}
            <div className="absolute -left-6 top-12 rounded-2xl border border-red-100 bg-white p-5 shadow-xl">
              <h4 className="text-3xl font-bold text-red-700">50+</h4>
              <p className="text-sm text-slate-500">
                Professional Courses
              </p>
            </div>

            {/* Recruiters Card */}
            <div className="absolute -right-6 bottom-12 rounded-2xl border border-green-100 bg-white p-5 shadow-xl">
              <h4 className="text-3xl font-bold text-green-600">100+</h4>
              <p className="text-sm text-slate-500">
                Hiring Companies
              </p>
            </div>

            {/* Floating Badge */}
            <div className="absolute left-1/2 top-6 -translate-x-1/2 rounded-full bg-white px-5 py-2 shadow-lg">
              <span className="text-sm font-semibold text-red-700">
                ★ Top IT & Management College
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}