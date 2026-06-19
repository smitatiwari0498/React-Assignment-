import { useShop } from "../context/ShopContext";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Wishlist from "./WishlistPage";

export default function Content() {
  const { activeTab } = useShop();

  const renderActiveTab = () => {
    switch (activeTab) {
      case "products":
        return <ProductList />;

      case "cart":
        return <Cart />;

      case "wishlist":
        return <Wishlist />;

      default:
        return <ProductList />;
    }
  };

  return <>{renderActiveTab()}</>;
}