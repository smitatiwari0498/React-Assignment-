import { useEffect, useState } from "react";

const images = [
  "https://picsum.photos/id/1015/600/300",
  "https://picsum.photos/id/1016/600/300",
  "https://picsum.photos/id/1018/600/300",
];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 300);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-2xl rounded-2xl p-4 w-[620px] text-center">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Auto Image Slider
        </h2>

        <div className="overflow-hidden rounded-xl shadow-md">
          <img
            src={images[index]}
            alt="slider"
            className={`w-full h-[300px] object-cover transition-all duration-700 ease-in-out ${
              fade ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;