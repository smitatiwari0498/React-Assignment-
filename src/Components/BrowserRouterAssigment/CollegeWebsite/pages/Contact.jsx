import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

export default function Contact() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-slate-50 py-24">
      
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-red-200/20 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-red-300/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">
        
        {/* Heading */}
        <div className="text-center">
          <span className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700">
            Contact Us
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900 lg:text-5xl">
            Get In Touch With
            <span className="block text-red-700">
              Star Infotech College
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Have questions about admissions, courses, or campus life?
            Our team is here to help you.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          
          {/* Contact Info */}
          <div className="space-y-6">
            
            <div className="rounded-3xl bg-white p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-red-100 p-3">
                  <MapPin className="text-red-700" size={24} />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Address
                  </h3>

                  <p className="mt-2 text-slate-600">
                    Star Infotech College,
                    Near Regional College Circle,
                    Ajmer, Rajasthan, India
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-red-100 p-3">
                  <Phone className="text-red-700" size={24} />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Phone
                  </h3>

                  <p className="mt-2 text-slate-600">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-red-100 p-3">
                  <Mail className="text-red-700" size={24} />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Email
                  </h3>

                  <p className="mt-2 text-slate-600">
                    info@starinfotechcollege.com
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-red-100 p-3">
                  <Clock className="text-red-700" size={24} />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Working Hours
                  </h3>

                  <p className="mt-2 text-slate-600">
                    Monday - Saturday <br />
                    9:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-900">
              Send Message
            </h3>

            <form className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-red-700 py-3 font-semibold text-white shadow-lg shadow-red-200 transition-all duration-300 hover:scale-[1.02] hover:bg-red-800"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}