import { useEffect, useState } from "react";
import { FaSpinner, FaUserGraduate } from "react-icons/fa";

function StudentLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 p-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
        {loading ? (
          <div className="text-center">
            <FaSpinner className="mx-auto animate-spin text-5xl text-blue-600" />

            <h2 className="mt-4 text-2xl font-bold">
              Loading Student Data...
            </h2>

            <p className="mt-2 text-gray-500">
              Please wait while data is being fetched.
            </p>
          </div>
        ) : (
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <FaUserGraduate className="text-4xl text-green-600" />
            </div>

            <h2 className="mt-4 text-2xl font-bold">
              Data Loaded Successfully
            </h2>

            <div className="mt-6 rounded-xl bg-gray-50 p-4 text-left">
              <p>
                <strong>Name:</strong> Rahul Sharma
              </p>
              <p>
                <strong>Course:</strong> BCA
              </p>
              <p>
                <strong>Semester:</strong> 4th
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default StudentLoader;