export default function StatCard({ title, amount, color }) {
  return (
    <div className={`p-4 rounded-2xl text-white ${color}`}>
      <h2 className="text-sm opacity-80">{title}</h2>
      <p className="text-2xl font-bold">₹{amount}</p>
    </div>
  );
}