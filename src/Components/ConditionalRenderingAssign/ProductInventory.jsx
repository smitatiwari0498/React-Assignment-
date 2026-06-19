import { useState } from "react";
import { FaBoxOpen, FaMinus, FaPlus } from "react-icons/fa";

function ProductInventory() {
  const [stock, setStock] = useState(8);

  const getStatus = () => {
    if (stock === 0) {
      return {
        text: "❌ Out of Stock",
        className: "bg-red-500",
      };
    }

    if (stock <= 5) {
      return {
        text: "⚠️ Low Stock",
        className: "bg-yellow-500",
      };
    }

    return {
      text: "✅ In Stock",
      className: "bg-green-500",
    };
  };

  const status = getStatus();

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-slate-100 to-slate-200 p-4">
      <div className="w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1527814050087-3793815479db?w=800"
          alt="Product"
          className="h-56 w-full object-cover"
        />

        <div className="p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-full bg-blue-100 p-3">
              <FaBoxOpen className="text-xl text-blue-600" />
            </div>

            <div>
              <h1 className="text-2xl font-bold">
                Wireless Headphones
              </h1>
              <p className="text-sm text-gray-500">
                Electronics Category
              </p>
            </div>
          </div>

          <div className="mb-4 rounded-xl bg-gray-50 p-4">
            <div className="mb-2 flex justify-between">
              <span>Price</span>
              <span className="font-semibold">₹1,999</span>
            </div>

            <div className="flex justify-between">
              <span>Available Quantity</span>
              <span className="font-semibold">{stock}</span>
            </div>
          </div>

          <div
            className={`rounded-xl p-3 text-center font-semibold text-white ${status.className}`}
          >
            {status.text}
          </div>

          {stock <= 5 && stock > 0 && (
            <p className="mt-3 text-center text-sm font-medium text-orange-600">
              Only {stock} items left. Restock soon!
            </p>
          )}

          <div className="mt-6 flex gap-3">
            <button
              onClick={() => stock > 0 && setStock(stock - 1)}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-500 py-3 text-white"
            >
              <FaMinus />
              Sell
            </button>

            <button
              onClick={() => setStock(stock + 1)}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-500 py-3 text-white"
            >
              <FaPlus />
              Restock
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInventory;