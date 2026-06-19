import { useState } from "react";

function UserDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log(isLoggedIn)

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-bold">
          User Dashboard
        </h1>

        {isLoggedIn ? (
          <div className="space-y-4">
            <div className="rounded-lg bg-green-100 p-4 text-center">
              <h2 className="text-xl font-semibold text-green-700">
                🟢 Online
              </h2>
              <p className="mt-2">Welcome, Admin</p>
            </div>

            <button
              onClick={() => setIsLoggedIn(false)}
              className="w-full rounded-lg bg-red-500 py-2 text-white hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="rounded-lg bg-red-100 p-4 text-center">
              <h2 className="text-xl font-semibold text-red-700">
                🔴 Offline
              </h2>
              <p className="mt-2">Please login to continue</p>
            </div>

            <button
              onClick={() => setIsLoggedIn(true)}
              className="w-full rounded-lg bg-green-500 py-2 text-white hover:bg-green-600"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserDashboard;