import { useShop } from "../context/ShopContext";
import ProductCard from "../components/ProductCard";

export default function ProductPage() {
  const { products } = useShop();

  return (
    <div>
      <h2>Products</h2>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}