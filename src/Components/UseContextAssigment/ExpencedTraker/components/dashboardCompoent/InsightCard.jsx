export default function InsightCard({ label, value, type = "default" }) {
  const colorMap = {
    success: "text-green-600",
    danger: "text-red-600",
    warning: "text-yellow-600",
    default: "text-gray-600",
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h3 className="text-sm text-gray-500">{label}</h3>
      <p className={`text-lg font-semibold ${colorMap[type]}`}>{value}</p>
    </div>
  );
}