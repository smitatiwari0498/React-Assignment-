import { useState } from "react";

function ProductCardGenerator() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
  });

  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const generateCard = () => {
    if (
      !product.name ||
      !product.price ||
      !product.category ||
      !product.image
    ) {
      return;
    }

    setProducts([
      ...products,
      {
        id: Date.now(),
        ...product,
      },
    ]);

    setProduct({
      name: "",
      price: "",
      category: "",
      image: "",
    });
  };

  const deleteProduct = (id) => {
    setProducts(
      products.filter((product) => product.id !== id)
    );
  };

  return (
    <div className="min-h-screen bg-slate-900 p-5">
      <div className="mx-auto max-w-7xl rounded-2xl bg-slate-800 p-6 shadow-2xl">
        <h1 className="mb-6 text-center text-3xl font-bold text-white">
          Product Card Generator
        </h1>

        <div className="grid gap-4 md:grid-cols-4">
          <div>
            <label className="mb-1 block text-sm text-slate-300">
              Product Name
            </label>

            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              placeholder="iPhone 15"
              className="w-full rounded-lg bg-slate-700 px-3 py-2 text-white outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-slate-300">
              Price
            </label>

            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              placeholder="79999"
              className="w-full rounded-lg bg-slate-700 px-3 py-2 text-white outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-slate-300">
              Category
            </label>

            <input
              type="text"
              name="category"
              value={product.category}
              onChange={handleChange}
              placeholder="Mobile"
              className="w-full rounded-lg bg-slate-700 px-3 py-2 text-white outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-slate-300">
              Image URL
            </label>

            <input
              type="text"
              name="image"
              value={product.image}
              onChange={handleChange}
              placeholder="https://..."
              className="w-full rounded-lg bg-slate-700 px-3 py-2 text-white outline-none"
            />
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <button
            onClick={generateCard}
            className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white shadow-lg hover:bg-blue-700"
          >
            Generate Card
          </button>

          <div className="rounded-lg bg-slate-700 px-4 py-2 text-slate-200">
            Total Products: {products.length}
          </div>
        </div>

        {products.length > 0 && (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-2xl bg-slate-700 shadow-xl transition hover:-translate-y-1"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-56 w-full object-cover"
                />

                <div className="p-4">
                  <span className="rounded-full bg-blue-600 px-3 py-1 text-xs text-white">
                    {item.category}
                  </span>

                  <h2 className="mt-3 text-xl font-bold text-white">
                    {item.name}
                  </h2>

                  <p className="mt-2 text-2xl font-bold text-green-400">
                    ₹{item.price}
                  </p>

                  <div className="mt-4 flex gap-2">
                    <button className="flex-1 rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700">
                      Add to Cart
                    </button>

                    <button
                      onClick={() => deleteProduct(item.id)}
                      className="rounded-lg bg-rose-500 px-4 text-white hover:bg-rose-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {products.length === 0 && (
          <div className="mt-8 rounded-xl bg-slate-700 p-8 text-center text-slate-300">
            No Products Added Yet
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCardGenerator;