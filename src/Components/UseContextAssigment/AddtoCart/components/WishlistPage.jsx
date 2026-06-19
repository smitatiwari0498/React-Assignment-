import { useShop } from "../context/ShopContext";

export default function Wishlist() {
  const { wishlist, toggleWishlist, addToCart, setActiveTab } = useShop();

  if (!wishlist.length) {
    return (
      <div className="text-center py-10 text-gray-500">
        No wishlist items
      </div>
    );
  }

  return (
    <div>
      {/* Top Action Bar */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setActiveTab("products")}
          className="px-4 py-2 text-sm rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition"
        >
          Go to Products
        </button>
      </div>

      {/* Wishlist Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {wishlist.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
          >
            {/* Image */}
            <div className="w-full h-40 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4 space-y-2">
              <h4 className="text-sm font-semibold text-gray-800">
                {item.name}
              </h4>

              <p className="text-gray-600 font-medium">
                ₹{item.price}
              </p>

              {/* Actions */}
              <div className="flex gap-2">
                <button
                  onClick={() => addToCart(item)}
                  className="w-full flex items-center justify-center gap-2 text-sm py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  🛒 Add to Cart
                </button>

                <button
                  onClick={() => toggleWishlist(item)}
                  className="w-full flex items-center justify-center gap-2 text-sm py-2 rounded-lg bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 transition"
                >
                  ❌ Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}