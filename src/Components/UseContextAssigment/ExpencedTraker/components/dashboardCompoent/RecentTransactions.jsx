export default function RecentTransactions({ transactions }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow w-1/2">
      <h2 className="text-gray-600 font-medium mb-3">Recent Transactions</h2>

      <div className="space-y-2">
        {transactions.slice(0, 5).map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b pb-2"
          >
            <div>
              <p className="font-medium">{item.title || "Transaction"}</p>
              <p className="text-xs text-gray-500">{item.type}</p>
            </div>

            <p
              className={`font-semibold ${
                item.type === "income" ? "text-green-600" : "text-red-600"
              }`}
            >
              ₹{item.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}