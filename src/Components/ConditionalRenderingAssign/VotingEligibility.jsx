import { useState } from "react";
import { FaUserCheck } from "react-icons/fa";

function VotingEligibility() {
  const [dob, setDob] = useState("");

  const calculateAge = (birthDate) => {
    const today = new Date();
    const dobDate = new Date(birthDate);

    let age = today.getFullYear() - dobDate.getFullYear();
    const monthDifference = today.getMonth() - dobDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 &&
        today.getDate() < dobDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  const age = dob ? calculateAge(dob) : 0;
  const isEligible = age >= 18;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 p-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
            <FaUserCheck className="text-2xl text-blue-600" />
          </div>

          <h1 className="text-3xl font-bold text-gray-800">
            Voting Eligibility Checker
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Select your date of birth
          </p>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Date of Birth
          </label>

          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-blue-500 focus:bg-white"
          />
        </div>

        {dob && (
          <>
            <div className="mt-6 rounded-xl bg-gray-50 p-4">
              <div className="mb-2 flex justify-between">
                <span className="font-medium">Age</span>
                <span>{age} Years</span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium">Date of Birth</span>
                <span>{dob}</span>
              </div>
            </div>

            <div
              className={`mt-4 rounded-xl p-4 text-center text-lg font-semibold text-white ${
                isEligible ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {isEligible
                ? "✅ Eligible to Vote"
                : "❌ Not Eligible to Vote"}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default VotingEligibility;