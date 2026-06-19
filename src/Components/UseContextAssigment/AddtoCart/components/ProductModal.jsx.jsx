import { useShop } from "../context/ShopContext";
import { IoMdClose } from "react-icons/io";

export default function ProductModal() {
  const { selectedProduct, setSelectedProduct, addToCart } = useShop();

  if (!selectedProduct) return null;

  const {
    image,
    name,
    price,
    originalPrice,
    discount,
    category,
    rating,
    stock,
    description,
  } = selectedProduct;

  return (
    <div
      onClick={() => setSelectedProduct(null)}
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-4xl rounded-xl shadow-2xl overflow-hidden relative"
      >
        <button
          onClick={() => setSelectedProduct(null)}
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-2xl"
        >
          <IoMdClose />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="bg-gray-100 flex items-center justify-center p-4">
            <img
              src={image}
              alt={name}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Details */}
          <div className="p-6 space-y-3">
            <h3 className="text-xl font-semibold">{name}</h3>

            <p className="text-sm text-gray-500">Category: {category}</p>

            <p className="text-sm text-yellow-600">Rating: ⭐ {rating}</p>

            <p className="text-sm text-gray-500">Stock: {stock} left</p>

            <p className="text-gray-600 text-sm">{description}</p>

            <div className="flex items-center gap-2">
              <p className="text-lg font-bold">₹{price}</p>

              <p className="text-sm line-through text-gray-400">
                ₹{originalPrice}
              </p>

              <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
                {discount}% OFF
              </span>
            </div>

            <div className="flex gap-2 pt-4">
              <button
                onClick={() => addToCart(selectedProduct)}
                className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}