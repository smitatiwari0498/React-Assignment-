import { useShop } from "../context/ShopContext";

export default function ProductDetail() {
  const { selectedProduct, addToCart, toggleWishlist, wishlist } =
    useShop();

  if (!selectedProduct) return <p>Select a product</p>;

  const isWishlisted = wishlist.find(
    (w) => w.id === selectedProduct.id
  );

  return (
    <div>
      <h2>Product Detail</h2>

      <img
        src={selectedProduct.image}
        alt={selectedProduct.name}
        width="200"
      />

      <h3>{selectedProduct.name}</h3>
      <p>₹{selectedProduct.price}</p>

      <button onClick={() => addToCart(selectedProduct)}>
        Add to Cart
      </button>

      <button onClick={() => toggleWishlist(selectedProduct)}>
        {isWishlisted ? "Remove Wishlist" : "Add Wishlist"}
      </button>
    </div>
  );
}