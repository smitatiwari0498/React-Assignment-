export default function Button({ label, onClick, active }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded ${
        active ? "bg-indigo-500 text-white" : "bg-gray-200"
      }`}
    >
      {label}
    </button>
  );
}