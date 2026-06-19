import { NavLink } from "react-router-dom";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-sky-100 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.jpg"
            alt="Star Infotech College Logo"
            className="h-12 w-12 rounded-xl border border-sky-100 bg-white object-contain p-1 shadow-sm"
          />

          <div>
            <h1 className="text-xl font-bold tracking-tight text-red-900">
              Star Infotech
            </h1>

            <p className="text-sm font-medium text-red-700">
              College
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `relative text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "text-red-700"
                    : "text-red-600 hover:text-red-700"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}

                  {isActive && (
                    <span className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-red-700" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button className="rounded-full border border-red-200 px-4 py-2 text-sm font-medium text-red-700 transition hover:bg-red-50">
            Admission Open
          </button>

          <button className="rounded-full bg-red-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-200 transition-all duration-300 hover:scale-105 hover:bg-red-700">
            Apply Now
          </button>
        </div>
      </div>
    </header>
  );
}