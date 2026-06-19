import { useEffect, useRef } from "react";

const AutoFocusSearch = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans">
      <div className="bg-white shadow-2xl rounded-2xl p-6 w-96 text-center">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Website Search
        </h2>

        <input
          ref={inputRef}
          type="text"
          placeholder="Search products..."
          className="w-full p-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
        />

        <button
          onClick={handleFocus}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
        >
          Focus Search
        </button>
      </div>
    </div>
  );
};

export default AutoFocusSearch;