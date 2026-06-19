import { createContext, useContext, useState } from "react";
import {products} from "../data/products.js"

const ShopContext = createContext();

export function ShopProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [activeTab, setActiveTab] = useState("products");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((p) => p.id === product.id);

      if (exist) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exist = prev.find((p) => p.id === product.id);

      if (exist) {
        return prev.filter((p) => p.id !== product.id);
      }

      return [...prev, product];
    });
  };


  const updateCartQty = (id, qty) => {
  setCart((prev) =>
    prev
      .map((item) =>
        item.id === id ? { ...item, qty } : item
      )
      .filter((item) => item.qty > 0)
  );
};

  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        wishlist,
        activeTab,
        setActiveTab,
        selectedProduct,
        setSelectedProduct,
        addToCart,
        removeFromCart,
        toggleWishlist,
        updateCartQty,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export const useShop = () => useContext(ShopContext);