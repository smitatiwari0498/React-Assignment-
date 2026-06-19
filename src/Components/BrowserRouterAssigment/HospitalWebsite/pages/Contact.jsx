import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Ambulance,
} from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Contact Us
          </span>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            Get In Touch With Our Team
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            We're here to help you with appointments, medical inquiries,
            and emergency support.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Details */}

          <div className="space-y-6">
            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="mb-8 text-3xl font-bold text-slate-900">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-blue-100 p-4 text-blue-600">
                    <MapPin size={24} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Hospital Address
                    </h4>
                    <p className="text-slate-600">
                      123 Healthcare Avenue,
                      Medical City, Rajasthan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-blue-100 p-4 text-blue-600">
                    <Phone size={24} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Phone Number
                    </h4>
                    <p className="text-slate-600">
                      +91 98765 43210
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-blue-100 p-4 text-blue-600">
                    <Mail size={24} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Email Address
                    </h4>
                    <p className="text-slate-600">
                      info@hospital.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-blue-100 p-4 text-blue-600">
                    <Clock size={24} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Working Hours
                    </h4>
                    <p className="text-slate-600">
                      Mon - Sun : 24 Hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-blue-600 p-8 text-white shadow-xl">
              <div className="flex items-center gap-4">
                <Ambulance size={40} />

                <div>
                  <h3 className="text-2xl font-bold">
                    Emergency Helpline
                  </h3>

                  <p className="mt-1 text-blue-100">
                    Available 24/7
                  </p>
                </div>
              </div>

              <h2 className="mt-6 text-4xl font-bold">
                +91 1800 123 456
              </h2>
            </div>
          </div>

          {/* Contact Form */}

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <h3 className="mb-8 text-3xl font-bold text-slate-900">
              Book an Appointment
            </h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-slate-200 p-4 outline-none focus:border-blue-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-slate-200 p-4 outline-none focus:border-blue-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-slate-200 p-4 outline-none focus:border-blue-500"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full rounded-xl border border-slate-200 p-4 outline-none focus:border-blue-500"
              ></textarea>

              <button className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}

        <div className="mt-16 overflow-hidden rounded-3xl shadow-xl">
          <iframe
            title="Hospital Location"
            src="https://www.google.com/maps/embed?pb="
            className="h-[400px] w-full"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}