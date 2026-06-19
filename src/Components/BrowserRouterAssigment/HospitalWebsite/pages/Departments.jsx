import {
  HeartPulse,
  Brain,
  Bone,
  Baby,
  ArrowRight,
} from "lucide-react";

const departments = [
  {
    title: "Cardiology",
    description:
      "Advanced cardiac care with experienced heart specialists.",
    icon: HeartPulse,
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
  },
  {
    title: "Neurology",
    description:
      "Comprehensive treatment for brain and nervous system disorders.",
    icon: Brain,
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309",
  },
  {
    title: "Orthopedics",
    description:
      "Specialized care for bones, joints, and sports injuries.",
    icon: Bone,
    image:
      "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb",
  },
  {
    title: "Pediatrics",
    description:
      "Dedicated healthcare services for infants and children.",
    icon: Baby,
    image:
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
  },
];

export default function Departments() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Medical Departments
          </span>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            Specialized Care For Every Patient
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
            Our multidisciplinary departments provide advanced diagnostics,
            expert consultations, and personalized treatment plans.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {departments.map((department) => {
            const Icon = department.icon;

            return (
              <div
                key={department.title}
                className="group relative overflow-hidden rounded-[32px] bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-[320px] overflow-hidden">
                  <img
                    src={department.image}
                    alt={department.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent" />

                  <div className="absolute left-6 top-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md">
                    <Icon size={30} className="text-white" />
                  </div>

                  <div className="absolute bottom-0 p-8 text-white">
                    <h3 className="text-3xl font-bold">
                      {department.title}
                    </h3>

                    <p className="mt-3 max-w-md text-slate-200">
                      {department.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-6">
                  <div className="flex gap-8">
                    <div>
                      <h4 className="text-xl font-bold text-blue-600">
                        50+
                      </h4>
                      <p className="text-sm text-slate-500">
                        Specialists
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-blue-600">
                        24/7
                      </h4>
                      <p className="text-sm text-slate-500">
                        Support
                      </p>
                    </div>
                  </div>

                  <button className="flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700">
                    Explore
                    <ArrowRight
                      size={18}
                      className="transition group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}