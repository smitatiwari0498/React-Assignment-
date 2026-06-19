import {
  FaTooth,
  FaHeartbeat,
  FaBrain,
  FaUserMd,
  FaXRay,
  FaAmbulance,
} from "react-icons/fa";

const services = [
  {
    title: "Dental Care",
    icon: <FaTooth />,
    description:
      "Comprehensive dental treatments including routine checkups, cosmetic dentistry, and advanced oral care solutions.",
  },
  {
    title: "Cardiology",
    icon: <FaHeartbeat />,
    description:
      "Expert heart care services with advanced diagnostic tools and personalized treatment plans for cardiac patients.",
  },
  {
    title: "Neurology",
    icon: <FaBrain />,
    description:
      "Specialized care for neurological disorders, brain health, and nervous system conditions using modern techniques.",
  },
  {
    title: "Specialists",
    icon: <FaUserMd />,
    description:
      "Access to experienced doctors and specialists across multiple medical disciplines for complete healthcare support.",
  },
  {
    title: "Radiology",
    icon: <FaXRay />,
    description:
      "Accurate imaging services including X-rays, scans, and diagnostic evaluations using advanced equipment.",
  },
  {
    title: "Emergency Care",
    icon: <FaAmbulance />,
    description:
      "24/7 emergency medical assistance with rapid response teams and fully equipped emergency facilities.",
  },
];

export default function Services() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">
            Medical Services We Provide
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            Our hospital offers a wide range of healthcare services designed to
            meet the needs of patients of all ages. With modern technology and
            experienced medical professionals, we ensure quality care at every
            stage of treatment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-3xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {service.description}
              </p>

              <button className="mt-6 text-blue-600 font-medium hover:text-blue-800">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}