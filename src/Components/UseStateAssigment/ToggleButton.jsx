import { useState } from "react";

function ToggleButton() {
  const [showImage, setShowImage] = useState(true);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-center text-2xl font-bold">
          Show / Hide Image
        </h2>

        <div className="mb-6 overflow-hidden rounded-lg border">
          {showImage && (
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800"
              alt="Nature"
              className="h-64 w-full object-cover"
            />
          )}
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => setShowImage(true)}
            className="rounded-lg bg-green-600 px-5 py-2 font-medium text-white transition hover:bg-green-700"
          >
            Show
          </button>

          <button
            onClick={() => setShowImage(false)}
            className="rounded-lg bg-red-600 px-5 py-2 font-medium text-white transition hover:bg-red-700"
          >
            Hide
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToggleButton;