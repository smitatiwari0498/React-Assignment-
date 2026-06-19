import { useRef, useState } from "react";

const images = [
  "https://picsum.photos/id/1015/200/150",
  "https://picsum.photos/id/1016/200/150",
  "https://picsum.photos/id/1018/200/150",
];

const ImageGallery = () => {
  const dialogRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
    dialogRef.current?.showModal();
  };

  const closePreview = () => {
    dialogRef.current?.close();
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h2 className="text-2xl font-semibold mb-6 text-gray-700">
        Image Gallery
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="gallery"
            className="w-32 h-24 object-cover rounded-lg shadow-md cursor-pointer hover:scale-105 transition"
            onClick={() => openImage(image)}
          />
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl p-4 shadow-2xl backdrop:bg-black/60"
      >
        <div className="flex flex-col items-center justify-center">
          <img
            src={selectedImage}
            alt="preview"
            className="w-[400px] h-[250px] object-cover rounded-lg shadow-md"
          />

          <button
            onClick={closePreview}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Close
          </button>
        </div>
      </dialog>
    </div>
  );
};

export default ImageGallery;