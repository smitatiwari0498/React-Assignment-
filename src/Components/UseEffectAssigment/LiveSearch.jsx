import { useEffect, useState } from "react";

const data = [
  { category: "Electronics", subcategory: "Mobile", name: "iPhone 14" },
  { category: "Electronics", subcategory: "Mobile", name: "Samsung Galaxy S23" },
  { category: "Electronics", subcategory: "Laptop", name: "MacBook Air" },
  { category: "Electronics", subcategory: "Laptop", name: "Dell XPS 13" },
  { category: "Electronics", subcategory: "Audio", name: "AirPods Pro" },
  { category: "Electronics", subcategory: "Audio", name: "Sony Headphones" },
  { category: "Home Appliance", subcategory: "Kitchen", name: "Mixer Grinder" },
  { category: "Home Appliance", subcategory: "Kitchen", name: "Microwave Oven" },
  { category: "Home Appliance", subcategory: "Cleaning", name: "Vacuum Cleaner" },
  { category: "Home Appliance", subcategory: "Cleaning", name: "Steam Mop" },
  { category: "Fashion", subcategory: "Men", name: "T-Shirt" },
  { category: "Fashion", subcategory: "Men", name: "Jeans" },
  { category: "Fashion", subcategory: "Women", name: "Kurti" },
  { category: "Fashion", subcategory: "Women", name: "Saree" },
];

const CategoryFilter = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [subcategory, setSubcategory] = useState("all");

  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("none");

  const [filteredData, setFilteredData] = useState(data);

  const categories = ["all", ...new Set(data.map((item) => item.category))];

  const subcategories =
    category === "all"
      ? ["all"]
      : [
          "all",
          ...new Set(
            data
              .filter((item) => item.category === category)
              .map((item) => item.subcategory)
          ),
        ];

  const handleSort = (field, order) => {
    setSortField(field);
    setSortOrder(order);
  };

  useEffect(() => {
    let result = [...data];

    if (search) {
      result = result.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== "all") {
      result = result.filter((item) => item.category === category);
    }

    if (subcategory !== "all") {
      result = result.filter((item) => item.subcategory === subcategory);
    }

    if (sortField && sortOrder !== "none") {
      result.sort((a, b) => {
        const valA = a[sortField].toLowerCase();
        const valB = b[sortField].toLowerCase();

        if (sortOrder === "asc") return valA.localeCompare(valB);
        if (sortOrder === "desc") return valB.localeCompare(valA);
        return 0;
      });
    }

    setFilteredData(result);
  }, [search, category, subcategory, sortField, sortOrder]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 font-sans">
      <div className="bg-white shadow-2xl rounded-2xl p-6 w-[900px]">
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-700">
          Product Data Table
        </h1>

        {/* FILTER */}
        <div className="flex flex-wrap gap-2 mb-6">
          <input
            className="flex-1 p-2 rounded-lg bg-gray-100"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="p-2 rounded-lg bg-gray-100"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setSubcategory("all");
            }}
          >
            {categories.map((c, i) => (
              <option key={i} value={c}>
                {c}
              </option>
            ))}
          </select>

          <select
            className="p-2 rounded-lg bg-gray-100"
            value={subcategory}
            onChange={(e) => setSubcategory(e.target.value)}
          >
            {subcategories.map((s, i) => (
              <option key={i} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-xl rounded-2xl overflow-hidden">
            <thead>
              <tr className="bg-gray-200 text-gray-700 text-sm">

                <th
                  className="p-3 cursor-pointer select-none"
                  onClick={() =>
                    handleSort(
                      "name",
                      sortField === "name" && sortOrder === "asc"
                        ? "desc"
                        : "asc"
                    )
                  }
                >
                  Name {sortField === "name" ? (sortOrder === "asc" ? "▲" : "▼") : "v"}
                </th>

                <th
                  className="p-3 cursor-pointer select-none"
                  onClick={() =>
                    handleSort(
                      "category",
                      sortField === "category" && sortOrder === "asc"
                        ? "desc"
                        : "asc"
                    )
                  }
                >
                  Category {sortField === "category" ? (sortOrder === "asc" ? "▲" : "▼") : "v"}
                </th>

                <th
                  className="p-3 cursor-pointer select-none"
                  onClick={() =>
                    handleSort(
                      "subcategory",
                      sortField === "subcategory" && sortOrder === "asc"
                        ? "desc"
                        : "asc"
                    )
                  }
                >
                  Subcategory {sortField === "subcategory" ? (sortOrder === "asc" ? "▲" : "▼") : "v"}
                </th>
              </tr>
            </thead>

            <tbody className="text-gray-700 text-sm">
              {filteredData.map((item, i) => (
                <tr key={i} className="hover:shadow-md transition">
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.category}</td>
                  <td className="p-3">{item.subcategory}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredData.length === 0 && (
          <p className="text-center mt-4 text-gray-500">No data found</p>
        )}
      </div>
    </div>
  );
};

export default CategoryFilter;