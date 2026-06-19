import { useRef, useState } from "react";

const VideoController = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };

  const handleToggle = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  const handleVolumeChange = (e) => {
    const value = e.target.value;
    setVolume(value);
    videoRef.current.volume = value;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-2xl rounded-2xl p-5 w-[500px]">
        <h2 className="text-xl font-semibold text-gray-700 text-center mb-4">
          Video Controller
        </h2>

        <video
          ref={videoRef}
          className="w-full rounded-xl shadow-md"
          src="https://www.w3schools.com/html/mov_bbb.mp4"
        />

        <div className="flex items-center justify-between mt-4">
          <button
            onClick={handleToggle}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
          >
            {isPlaying ? "Pause" : "Play"}
          </button>

          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoController;