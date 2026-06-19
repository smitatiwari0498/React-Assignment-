import { useEffect, useState } from "react";

const CounterTitle = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
   // alert("Updating document title...");
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4 0" >
      <div className="w-full max-w-sm rounded-2xl bg-slate-800 p-6 text-center shadow-2xl">
         <h2 className="mb-6 text-center text-xl font-bold text-white">         
         Counter (Using useEffect)
        </h2>
        <h2 className="text-2xl font-bold text-white">
          Counter: {count}
        </h2>

        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="mt-5 w-full rounded-xl bg-blue-600 py-3 font-medium text-white shadow-lg transition hover:bg-blue-700"
        >
          Increase
        </button>
      </div>
    </div>
  );
};

export default CounterTitle;