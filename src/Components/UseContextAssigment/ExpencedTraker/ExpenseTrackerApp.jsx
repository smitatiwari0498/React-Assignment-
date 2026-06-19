import { ExpenseProvider } from "./context/ExpenseContext";
import Dashboard from "./pages/Dashboard";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import { useState } from "react";
import {
  FaChartPie,
  FaPlusCircle,
  FaListUl,
} from "react-icons/fa";

export default function ExpenceTrackerApp() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "add":
        return <AddTransaction />;
      case "list":
        return <TransactionList />;
      default:
        return <Dashboard />;
    }
  };

  const menu = [
    { key: "dashboard", label: "Dashboard", icon: <FaChartPie /> },
    { key: "add", label: "Add Transaction", icon: <FaPlusCircle /> },
    { key: "list", label: "Transaction List", icon: <FaListUl /> },
  ];

  return (
    <ExpenseProvider>
      <div className="flex min-h-screen bg-blue-50">

        {/* Sidebar */}
        <div className="w-64 bg-blue-600 text-white flex flex-col">

          {/* Logo */}
          <div className="text-xl font-bold p-5 border-b border-blue-400">
            College Expense Tracker
          </div>

          {/* Menu */}
          <div className="flex-1 p-3 space-y-2">
            {menu.map((item) => (
              <button
                key={item.key}
                onClick={() => setActiveTab(item.key)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  activeTab === item.key
                    ? "bg-white text-blue-600 font-semibold"
                    : "hover:bg-blue-500"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">

          {/* Top Navbar */}
          <div className="text-white shadow px-6 py-4 font-bold text-lg bg-blue-600">
            College Expense Tracker Dashboard
          </div>

          {/* Page Content */}
          <div className="p-6">{renderContent()}</div>
        </div>
      </div>
    </ExpenseProvider>
  );
}