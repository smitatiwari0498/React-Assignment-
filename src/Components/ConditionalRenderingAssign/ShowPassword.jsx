import { useState } from "react";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";

function ShowPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 p-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
            <FaLock className="text-2xl text-blue-600" />
          </div>

          <h1 className="text-3xl font-bold text-gray-800">
            Secure Login
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Enter your password to continue
          </p>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Password
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 pr-12 outline-none transition focus:border-blue-500 focus:bg-white"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-lg text-gray-500 hover:text-blue-600"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        <div className="mt-6 rounded-xl bg-gray-50 p-4">
          <p className="text-sm text-gray-600">
            Password Status
          </p>

          <h2 className="mt-1 text-lg font-semibold">
            {showPassword ? "👁️ Visible" : "🔒 Hidden"}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default ShowPassword;