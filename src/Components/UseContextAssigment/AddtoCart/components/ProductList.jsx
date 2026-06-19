import { useShop } from "../context/ShopContext";

export default function ProductList() {
  const {
    products,
    addToCart,
    toggleWishlist,
    wishlist,
    setSelectedProduct,
  } = useShop();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {products.map((product) => {
        const isWishlisted = wishlist.some(
          (item) => item.id === product.id
        );

        return (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
          >
            {/* Image Section */}
            <div className="relative w-full h-44 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              />

              {/* Discount Badge */}
              {product.discount && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md shadow">
                  {product.discount}% OFF
                </span>
              )}

              {/* Wishlist Icon */}
              <button
                onClick={() => toggleWishlist(product)}
                className="absolute top-2 right-2 w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-md hover:scale-105 transition"
              >
                {isWishlisted ? "❤️" : "🤍"}
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-2">
              <h4 className="text-sm font-semibold text-gray-800">
                {product.name}
              </h4>

              <p className="text-gray-600 font-medium line-clamp-2">
                {product.description}
              </p>

              <p className="text-gray-600 font-medium">
                ₹{product.price}
              </p>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-blue-600 text-white text-sm py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Add to Cart
                </button>

                <button
                  onClick={() => setSelectedProduct(product)}
                  className="w-full text-sm py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}