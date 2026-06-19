import { useShop } from "../context/ShopContext";

export default function Cart() {
  const { cart, removeFromCart, updateCartQty } = useShop();

  const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const totalDiscount = cart.reduce((acc, item) => {
    const discountAmount =
      ((item.originalPrice - item.price) || 0) * item.qty;
    return acc + discountAmount;
  }, 0);

  const totalBill = subtotal;

  if (!cart.length) {
    return (
      <div className="text-center py-10 text-gray-500">
        Cart is empty
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Cart Items */}
      <div className="lg:col-span-2 space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 bg-white border rounded-xl p-4 shadow-md"
          >
            <div className="w-16 h-16 overflow-hidden rounded-lg bg-gray-100">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h4 className="font-semibold">{item.name}</h4>

              <p className="text-sm text-gray-600">
                {item.description}
              </p>

              <p className="text-sm text-gray-600">
                ₹{item.price}
              </p>

              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() =>
                    updateCartQty(item.id, item.qty - 1)
                  }
                  className="w-8 h-8 border rounded"
                >
                  -
                </button>

                <span>{item.qty}</span>

                <button
                  onClick={() =>
                    updateCartQty(item.id, item.qty + 1)
                  }
                  className="w-8 h-8 border rounded"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 text-sm"
            >
              🗑
            </button>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="bg-white border rounded-xl shadow-lg p-5 h-fit">
        <h3 className="text-lg font-semibold mb-4">
          Order Summary
        </h3>

        <div className="space-y-2 text-sm">
          <p className="flex justify-between">
            <span>Total Items</span>
            <span>{cart.length}</span>
          </p>

          <p className="flex justify-between">
            <span>Total Qty</span>
            <span>{totalQty}</span>
          </p>

          <p className="flex justify-between text-green-600">
            <span>Total Discount</span>
            <span>- ₹{totalDiscount}</span>
          </p>
        </div>

        <div className="border-t mt-3 pt-3 flex justify-between font-semibold">
          <span>Total Payable</span>
          <span>₹{totalBill}</span>
        </div>

        <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg">
          Checkout
        </button>
      </div>
    </div>
  );
}