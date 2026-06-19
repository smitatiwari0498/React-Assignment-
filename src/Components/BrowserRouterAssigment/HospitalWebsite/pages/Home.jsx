import { FaArrowRight, FaUserMd, FaHospital, FaHeartbeat, FaAmbulance } from "react-icons/fa";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[90vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3')",
        }}
      >
        <div className="absolute inset-0 bg-blue-950/70"></div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <h1 className="text-6xl font-bold leading-tight">
              Advanced Healthcare
              <br />
              For Every Patient
            </h1>

            <p className="mt-6 text-lg max-w-2xl text-gray-200">
              Providing world-class medical facilities with experienced
              doctors and advanced healthcare technology.
            </p>

            <button className="mt-8 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg flex items-center gap-3">
              Book Appointment
              <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200"
            alt="Hospital"
            className="rounded-2xl shadow-lg"
          />

          <div>
            <h2 className="text-4xl font-bold mb-5">About Our Hospital</h2>

            <p className="text-gray-600 leading-8">
              We are committed to delivering exceptional healthcare services
              through advanced medical technology, experienced specialists, and
              compassionate patient care. Our mission is to improve lives by
              providing safe, reliable, and accessible healthcare for everyone.
            </p>

            <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">
            Our Services
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow text-center">
              <FaUserMd className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Expert Doctors</h3>
              <p className="text-gray-600">
                Experienced specialists across multiple medical fields.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow text-center">
              <FaHeartbeat className="text-5xl text-red-500 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Heart Care</h3>
              <p className="text-gray-600">
                Advanced diagnosis and treatment for heart conditions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow text-center">
              <FaHospital className="text-5xl text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Modern Facilities</h3>
              <p className="text-gray-600">
                State-of-the-art equipment and patient care facilities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow text-center">
              <FaAmbulance className="text-5xl text-orange-500 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">24/7 Emergency</h3>
              <p className="text-gray-600">
                Emergency services available around the clock.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">
          <div>
            <h3 className="text-5xl font-bold">50+</h3>
            <p className="mt-3">Specialist Doctors</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold">25K+</h3>
            <p className="mt-3">Happy Patients</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold">15+</h3>
            <p className="mt-3">Years Experience</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold">24/7</h3>
            <p className="mt-3">Emergency Support</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border p-8 rounded-xl">
              <h3 className="font-bold text-2xl mb-3">
                Experienced Specialists
              </h3>
              <p className="text-gray-600">
                Our doctors are highly qualified and experienced in their
                respective medical fields.
              </p>
            </div>

            <div className="border p-8 rounded-xl">
              <h3 className="font-bold text-2xl mb-3">
                Advanced Technology
              </h3>
              <p className="text-gray-600">
                We use modern medical equipment for accurate diagnosis and
                treatment.
              </p>
            </div>

            <div className="border p-8 rounded-xl">
              <h3 className="font-bold text-2xl mb-3">Patient First Care</h3>
              <p className="text-gray-600">
                We focus on personalized treatment plans and compassionate care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-5">
            Need Medical Assistance?
          </h2>

          <p className="text-lg mb-8">
            Schedule your appointment today and receive the best healthcare
            services from our experienced medical professionals.
          </p>

          <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold">
            Contact Us
          </button>
        </div>
      </section>
    </>
  );
}