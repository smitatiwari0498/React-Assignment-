export default function Navbar({ activeTab, setActiveTab }) {
  const menu = [
    { key: "dashboard", label: "Dashboard 📊" },
    { key: "add", label: "Add Transaction ➕" },
    { key: "list", label: "Transaction List 📜" },
  ];

  return (
    <div className="w-64 bg-indigo-600 text-white min-h-screen p-5 space-y-4">
      <h1 className="text-2xl font-bold mb-6">
        Expense Tracker
      </h1>

      {menu.map((item) => (
        <button
          key={item.key}
          onClick={() => setActiveTab(item.key)}
          className={`w-full text-left px-4 py-3 rounded-lg transition ${
            activeTab === item.key
              ? "bg-white text-indigo-600 font-semibold"
              : "hover:bg-indigo-500"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}