const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const btnClass =
    "px-3 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-sm font-medium";

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow flex justify-center gap-3 p-3 z-50">
      <button onClick={() => scrollToSection("useState")} className={btnClass}>
        useState
      </button>
      <button
        onClick={() => scrollToSection("conditional")}
        className={btnClass}
      >
        Conditional
      </button>
      <button onClick={() => scrollToSection("crud")} className={btnClass}>
        CRUD
      </button>
      <button
        onClick={() => scrollToSection("useEffect")}
        className={btnClass}
      >
        useEffect
      </button>
      <button onClick={() => scrollToSection("useRef")} className={btnClass}>
        useRef
      </button>

       <button onClick={() => scrollToSection("hooks")} className={btnClass}>
        Hooks
      </button>

      <button onClick={() => scrollToSection("useContext")} className={btnClass}>
        useContext
      </button>

       <button onClick={() => scrollToSection("reactRouter")} className={btnClass}>
        React Router
      </button>

      <button onClick={() => scrollToSection("Navigate&Params")} className={btnClass}>
        Navigate&Params
      </button>
    </div>
  );
};

export default Navbar