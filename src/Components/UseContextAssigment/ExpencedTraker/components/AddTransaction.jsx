import { useState } from "react";
import { useExpense } from "../context/ExpenseContext";

export default function AddTransaction() {
  const { addTransaction } = useExpense();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  const [category, setCategory] = useState("General");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount) return;

    addTransaction({
      id: Date.now(),
      title,
      amount: Number(amount),
      type,
      category,
      date: new Date().toLocaleString(),
    });

    setTitle("");
    setAmount("");
    setType("income");
    setCategory("General");
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-3xl shadow-lg border border-slate-100 p-6 space-y-5"
      >
        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Add Transaction
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Add income and expense records
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600 mb-2">
            Title
          </label>
          <input
            type="text"
            placeholder="Enter transaction title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600 mb-2">
            Amount
          </label>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Transaction Type
            </label>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="income">💰 Income</option>
              <option value="expense">💸 Expense</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Category
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="General">General</option>
              <option value="Fee">Fee</option>
              <option value="Salary">Salary</option>
              <option value="Stationery">Stationery</option>
              <option value="Electricity">Electricity</option>
              <option value="Maintenance">Maintenance</option>
              <option value="Canteen">Canteen</option>
              <option value="Travel">Travel</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
}