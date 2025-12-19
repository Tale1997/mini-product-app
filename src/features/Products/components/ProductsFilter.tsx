import Input from "../../../components/ui/Input";

export default function ProductsFilter({
  searchTerm,
  category,
  sort,
  handleParamChange,
}: {
  searchTerm: string;
  category: string;
  sort: string;
  handleParamChange: (key: string, value: string) => void;
}) {
  return (
    <div className="my-3 flex gap-3 items-center border-b pb-2 border-gray-200 justify-between">
      <Input
        className="border-gray-400 w-1/3"
        placeholder="Search products..."
        type="text"
        value={searchTerm}
        onChange={(e) => handleParamChange("search", e.target.value)}
      />

      <div className="flex items-center gap-2">
        <select
          className="border border-gray-400 p-2 rounded"
          name="category"
          id="category"
          value={category}
          onChange={(e) => handleParamChange("category", e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
        </select>

        <select
          className="border border-gray-400 p-2 rounded"
          name="sort"
          id="sort"
          onChange={(e) => handleParamChange("sort", e.target.value)}
          value={sort}
        >
          <option value="">Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
}
