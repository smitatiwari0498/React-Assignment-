import { useEffect, useRef, useState } from "react";

const SignupForm = () => {
  const nameInputRef = useRef(null);
  const [password, setPassword] = useState("");

  const checks = {
    minLength: password.length >= 8,
    number: /\d/.test(password),
    uppercase: /[A-Z]/.test(password),
    specialChar: /[!@#$%^&*]/.test(password),
  };

  const score = Object.values(checks).filter(Boolean).length;

  let strength = "";
  let strengthColor = "";

  if (!password) {
    strength = "";
    strengthColor = "";
  } else if (score <= 1) {
    strength = "Weak";
    strengthColor = "text-red-500";
  } else if (score === 2 || score === 3) {
    strength = "Medium";
    strengthColor = "text-yellow-500";
  } else {
    strength = "Strong";
    strengthColor = "text-green-500";
  }

  useEffect(() => {
    nameInputRef.current?.focus();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 font-sans">
      <div className="bg-white shadow-2xl rounded-2xl p-6 w-96">
        <h2 className="text-xl font-semibold text-center text-gray-700 mb-5">
          Signup Form
        </h2>

        <input
          ref={nameInputRef}
          type="text"
          placeholder="Name"
          className="w-full p-2 mb-4 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          maxLength={8}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        {/* PASSWORD LENGTH */}
        <p className="mt-2 text-sm text-gray-600">
          Length:{" "}
          <span className="font-semibold text-gray-800">
            {password.length}
          </span>
        </p>

        {/* STRENGTH */}
        <div className="mt-2 text-center">
          <p className={`text-lg font-semibold ${strengthColor}`}>
            {strength && `Password Strength: ${strength}`}
          </p>
        </div>

        {/* CHECKLIST */}
        <div className="mt-4 space-y-2 text-sm">
          <p className="font-medium text-gray-700 mb-2">
            Password must contain:
          </p>

          <div className="flex items-center gap-2">
            <span className={checks.minLength ? "text-green-500" : "text-gray-400"}>
              ✔
            </span>
            <span className={checks.minLength ? "text-green-600" : "text-gray-400"}>
              Minimum 8 characters
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className={checks.number ? "text-green-500" : "text-gray-400"}>
              ✔
            </span>
            <span className={checks.number ? "text-green-600" : "text-gray-400"}>
              Contains number
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className={checks.uppercase ? "text-green-500" : "text-gray-400"}>
              ✔
            </span>
            <span className={checks.uppercase ? "text-green-600" : "text-gray-400"}>
              Contains uppercase letter
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className={checks.specialChar ? "text-green-500" : "text-gray-400"}>
              ✔
            </span>
            <span className={checks.specialChar ? "text-green-600" : "text-gray-400"}>
              Contains special character
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;