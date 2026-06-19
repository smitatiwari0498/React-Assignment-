import { useShop } from "../context/ShopContext";

export default function Navbar() {
  const { activeTab, setActiveTab, cart, wishlist } = useShop();

  const navButtonClasses =
    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-gray-100 active:scale-95";

  const activeButtonClasses = "bg-gray-900 text-white hover:bg-gray-800";

  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setActiveTab("products")}
              className={`${navButtonClasses} ${
                activeTab === "products" ? activeButtonClasses : ""
              }`}
            >
              Products
            </button>

            <button
              onClick={() => setActiveTab("wishlist")}
              className={`${navButtonClasses} ${
                activeTab === "wishlist" ? activeButtonClasses : ""
              }`}
            >
              Wishlist ({wishlist.length})
            </button>

            <button
              onClick={() => setActiveTab("cart")}
              className={`${navButtonClasses} ${
                activeTab === "cart" ? activeButtonClasses : ""
              }`}
            >
              Cart ({cart.length})
            </button>
          </div>

          <div className="hidden sm:block text-sm font-semibold text-gray-700 capitalize">
            {activeTab}
          </div>
        </div>
      </div>
    </header>
  );
}