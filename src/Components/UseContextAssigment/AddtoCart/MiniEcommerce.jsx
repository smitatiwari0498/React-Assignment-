import { ShopProvider } from "./context/ShopContext";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import ProductModal from "./components/ProductModal.jsx";

export default function MiniEcommerce() {
  return (
    <ShopProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />

        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Content />
        </main>

        <ProductModal />
      </div>
    </ShopProvider>
  );
}