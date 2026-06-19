export default function Doctors() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialization: "Cardiologist",
      experience: "15+ Years Experience",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800",
      description:
        "Specialized in diagnosing and treating heart-related diseases. She has successfully managed thousands of cardiac patients and is known for her patient-centered approach.",
    },
    {
      id: 2,
      name: "Dr. Michael Brown",
      specialization: "Neurologist",
      experience: "12+ Years Experience",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800",
      description:
        "Expert in treating disorders of the brain, spine, and nervous system. He focuses on providing advanced neurological care with modern treatment methods.",
    },
    {
      id: 3,
      name: "Dr. Emily Davis",
      specialization: "Pediatrician",
      experience: "10+ Years Experience",
      image:
        "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=800",
      description:
        "Dedicated to child healthcare and development. She ensures every child receives compassionate care and personalized treatment plans.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold mb-4">Our Medical Specialists</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Our hospital is proud to have a team of highly qualified and
          experienced doctors dedicated to delivering exceptional healthcare.
          Each specialist combines medical expertise with compassionate care to
          ensure the best possible outcomes for patients.
        </p>
      </div>

      <div className="space-y-16">
        {doctors.map((doctor, index) => (
          <div
            key={doctor.id}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-1/2">
              <img
                src={doctor.image}
                alt={doctor.name}
               className="w-full h-[400px] object-cover object-top rounded-2xl shadow-lg"
              />
            </div>

            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-3">{doctor.name}</h2>

              <p className="text-blue-600 font-semibold mb-2">
                {doctor.specialization}
              </p>

              <p className="text-gray-500 mb-5">{doctor.experience}</p>

              <p className="text-gray-700 leading-8">
                {doctor.description}
              </p>

              <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}