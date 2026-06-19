import { useMemo, useState } from "react";
import { useExpense } from "../context/ExpenseContext";

import StatCard from "../components/dashboardCompoent/StatCard";
import InsightCard from "../components/dashboardCompoent/InsightCard";
import OverviewChart from "../components/dashboardCompoent/OverviewChart";
import RecentTransactions from "../components/dashboardCompoent/RecentTransactions";
import Button from "../components/ui/Button";

export default function Dashboard() {
  const { transactions } = useExpense();
  const [filter, setFilter] = useState("all");

  const filteredTransactions = useMemo(() => {
    if (filter === "income") return transactions.filter((t) => t.type === "income");
    if (filter === "expense") return transactions.filter((t) => t.type === "expense");
    return transactions;
  }, [transactions, filter]);

  const income = filteredTransactions
    .filter((t) => t.type === "income")
    .reduce((s, t) => s + t.amount, 0);

  const expense = filteredTransactions
    .filter((t) => t.type === "expense")
    .reduce((s, t) => s + t.amount, 0);

  const balance = income - expense;

  const chartData = [
    { label: "Income", value: income },
    { label: "Expense", value: expense },
    { label: "Balance", value: balance < 0 ? 0 : balance },
  ];

  const savingsRate = income > 0 ? ((balance / income) * 100).toFixed(1) : 0;

  return (
    <div className="space-y-6">

      {/* Filters */}
      <div className="flex gap-2">
        <Button label="All" active={filter === "all"} onClick={() => setFilter("all")} />
        <Button label="Income" active={filter === "income"} onClick={() => setFilter("income")} />
        <Button label="Expense" active={filter === "expense"} onClick={() => setFilter("expense")} />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard title="Income" amount={income} color="bg-green-500" />
        <StatCard title="Expense" amount={expense} color="bg-red-500" />
        <StatCard title="Balance" amount={balance} color="bg-indigo-500" />
      </div>

      {/* Insights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InsightCard
          label="Savings Rate"
          value={`${savingsRate}%`}
          type={savingsRate > 30 ? "success" : savingsRate > 10 ? "warning" : "danger"}
        />

        <InsightCard
          label="Status"
          value={balance >= 0 ? "Profit" : "Loss"}
          type={balance >= 0 ? "success" : "danger"}
        />
      </div>

      <div className="flex gap-6">
        {/* Chart */}
        <div className="w-full sm:w-1/2 bg-white p-4 rounded-2xl shadow">
          <h2 className="text-gray-600 font-medium mb-3">Overview</h2>
          <OverviewChart data={chartData} />
        </div>

        {/* Transactions */}
        
        <RecentTransactions className="w-full sm:w-1/2 bg-white p-4 rounded-2xl shadow" transactions={filteredTransactions} />
      </div>
    </div>
  );
}