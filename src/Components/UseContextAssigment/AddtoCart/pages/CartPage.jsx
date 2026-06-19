import { useShop } from "../context/ShopContext";

export default function CartPage() {
  const { cart, removeFromCart } = useShop();

  return (
    <div>
      <h2>Cart</h2>

      {cart.length === 0 && <p>Cart Empty</p>}

      {cart.map((item) => (
        <div key={item.id}>
          <p>
            {item.name} - ₹{item.price} x {item.qty}
          </p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}