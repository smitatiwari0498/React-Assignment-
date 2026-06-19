import { useState } from "react";

function ThemeChanger() {
  const [bgColor, setBgColor] = useState("bg-white  text-white");

  return (
    <div
      className={`flex min-h-screen items-center justify-center transition-all duration-300 ${bgColor}`}
    >
      <div className="relative h-60 w-full max-w-3xl rounded-2xl border border-white/20 bg-white/80 p-6 shadow-xl backdrop-blur">
        <h1 className="text-center text-3xl font-bold">
          Theme Changer
        </h1>

        <p className="mt-4 text-center text-gray-600">
          Click any color button to change the background theme.
        </p>

        <div className="absolute bottom-9 left-1/2 flex -translate-x-1/2 gap-3 rounded-full bg-white p-3 shadow-lg">
          <button
            onClick={() => setBgColor("bg-red-500 ")}
            className="h-10 w-10 rounded-full bg-red-500"
          />

          <button
            onClick={() => setBgColor("bg-blue-500")}
            className="h-10 w-10 rounded-full bg-blue-500"
          />

          <button
            onClick={() => setBgColor("bg-green-500")}
            className="h-10 w-10 rounded-full bg-green-500"
          />

          <button
            onClick={() => setBgColor("bg-yellow-400")}
            className="h-10 w-10 rounded-full bg-yellow-400"
          />

          <button
            onClick={() => setBgColor("bg-purple-500")}
            className="h-10 w-10 rounded-full bg-purple-500"
          />
        </div>
      </div>
    </div>
  );
}

export default ThemeChanger;