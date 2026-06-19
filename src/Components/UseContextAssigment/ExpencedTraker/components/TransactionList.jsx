import { useState } from "react";
import { useExpense } from "../context/ExpenseContext";

export default function TransactionList() {
  const { transactions, deleteTransaction } = useExpense();

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const categories = [
    ...new Set(transactions.map((transaction) => transaction.category)),
  ];

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch = transaction.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesType =
      typeFilter === "all" || transaction.type === typeFilter;

    const matchesCategory =
      categoryFilter === "all" ||
      transaction.category === categoryFilter;

    return matchesSearch && matchesType && matchesCategory;
  });

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
        <div>
          <h2 className="text-xl font-bold text-slate-800">
            Transaction History
          </h2>
          <p className="text-sm text-slate-500">
            View and manage all transactions
          </p>
        </div>

        <span className="px-3 py-1 text-sm font-medium bg-indigo-100 text-indigo-700 rounded-full w-fit">
          {filteredTransactions.length} Records
        </span>
      </div>

      <div className="grid md:grid-cols-3 gap-3 mb-6">
        <input
          type="text"
          placeholder="🔍 Search transaction..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="all">All Types</option>
          <option value="income">💰 Income</option>
          <option value="expense">💸 Expense</option>
        </select>

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="all">All Categories</option>

          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {filteredTransactions.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="text-5xl mb-3">📋</div>

          <p className="text-slate-500 font-medium">
            No transactions found
          </p>

          <p className="text-sm text-slate-400 mt-1">
            Try changing your filters or add a transaction
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredTransactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-4 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all duration-300"
            >
              <div>
                <h3 className="font-semibold text-slate-800">
                  {transaction.title}
                </h3>

                <div className="flex items-center gap-2 mt-1 flex-wrap">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      transaction.type === "income"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {transaction.type}
                  </span>

                  <span className="px-2 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-full">
                    {transaction.category}
                  </span>
                </div>

                <p className="text-xs text-slate-400 mt-2">
                  {transaction.date}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <p
                  className={`text-lg font-bold ${
                    transaction.type === "income"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  ₹{transaction.amount}
                </p>

                <button
                  onClick={() => deleteTransaction(transaction.id)}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-red-50 text-red-500 hover:bg-red-100 transition"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}