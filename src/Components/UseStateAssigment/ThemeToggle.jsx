import { useState } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  


  return (
    <div
      className={`flex min-h-screen items-center justify-center transition-all duration-300 ${
        darkMode ? "bg-slate-900" : "bg-slate-100"
      }`}
    >
      <div
        className={`w-full max-w-md rounded-2xl p-8 text-center shadow-xl transition-all duration-300 ${
          darkMode ? "bg-slate-800 text-white" : "bg-white text-slate-900"
        }`}
      >
        <h1 className="mb-4 text-3xl font-bold">
          Light / Dark Mode
        </h1>

        <p className="mb-6">
          Click the button below to switch the theme.
        </p>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`rounded-lg px-6 py-3 font-semibold transition ${
            darkMode
              ? "bg-yellow-400 text-black hover:bg-yellow-500"
              : "bg-slate-900 text-white hover:bg-slate-700"
          }`}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </div>
  );
}

export default ThemeToggle;