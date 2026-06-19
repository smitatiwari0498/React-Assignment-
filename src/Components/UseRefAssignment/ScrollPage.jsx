import { useRef } from "react";

const ScrollPage = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-sans">
      <div className="fixed top-0 left-0 w-full bg-white shadow-md flex justify-center gap-4 p-3 z-10">
        <button
          onClick={() => scrollToSection(homeRef)}
          className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
        >
          Home
        </button>

        <button
          onClick={() => scrollToSection(aboutRef)}
          className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
        >
          About
        </button>

        <button
          onClick={() => scrollToSection(contactRef)}
          className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
        >
          Contact
        </button>
      </div>

      
    </div>
  );
};

export default ScrollPage;