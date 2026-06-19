import { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const intervalId = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isRunning]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans">
      <div
        className="relative w-80 rounded-2xl p-8 text-center shadow-2xl overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR6HN2cS9vhDcsVV1ojKw8tCDO6_mIf-QgeBTCzGq8UQ&s)",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10">
          <h1 className="text-xl font-semibold text-white mb-6">
            Timer App
          </h1>

          <div className="text-5xl font-bold text-white mb-6">
            {time}s
          </div>

          <div className="flex gap-2 justify-center">
            <button
              onClick={() => setIsRunning(true)}
              className="px-4 py-2 rounded-lg bg-green-500 text-white shadow-md hover:bg-green-600 transition"
            >
              Start
            </button>

            <button
              onClick={() => setIsRunning(false)}
              className="px-4 py-2 rounded-lg bg-red-500 text-white shadow-md hover:bg-red-600 transition"
            >
              Stop
            </button>

            <button
              onClick={() => {
                setTime(0);
                setIsRunning(false);
              }}
              className="px-4 py-2 rounded-lg bg-gray-800 text-white shadow-md hover:bg-gray-900 transition"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;