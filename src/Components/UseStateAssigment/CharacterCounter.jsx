import { useState } from "react";

function CharacterCounter() {
  const [text, setText] = useState("");

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-center text-2xl font-bold">
          Character Counter
        </h2>

        <textarea
          rows="5"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
          className="w-full rounded-md border border-gray-300 p-3 outline-none transition focus:border-blue-500"
        />

        <p className="mt-4 text-right text-lg font-medium">
          Total Characters: <span className="text-blue-600">{text.length}</span>
        </p>
      </div>
    </div>
  );
}

export default CharacterCounter;