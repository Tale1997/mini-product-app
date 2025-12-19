import { useSearchParams } from "react-router-dom";
import { ProductListSkeleton } from "../../features/Products/components/ProdutsListSkletion";
import { useProducts } from "../../features/Products/hooks/useProducts";
import { useCallback } from "react";
import type { Product } from "../../features/Products/types/product";
import { useProductsList } from "../../features/Products/hooks/useProductsList.ts";

import PaginationControls from "../../components/common/PaginationCntrols";
import ProductItem from "../../features/Products/components/ProductItem";
import ErrorBlock from "../../components/layout/ErrorBlock";
import ProductsFilter from "../../features/Products/components/ProductsFilter";

export default function ProductsList() {
  const [searchParams, setSearchParam] = useSearchParams("");

  const searchTerm = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";
  const sort = searchParams.get("sort") || "";

  const { products, error, loading } = useProducts();

  const {
    filteredProducts,
    paginatedProducts,
    currentPage,
    setCurrentPage,
    totalPages,
  } = useProductsList({
    products: products || [],
    search: searchTerm,
    category,
    sort,
    itemsPerPage: 5,
  });

  const handleParamChange = useCallback(
    (key: string, value: string) => {
      setSearchParam(
        (prev) => {
          const params = Object.fromEntries(prev);

          if (value) {
            params[key] = value;
          } else {
            delete params[key];
          }

          return params;
        },
        { replace: true }
      );
      setCurrentPage(1);
    },
    [setCurrentPage, setSearchParam]
  );

  if (loading) {
    return <ProductListSkeleton />;
  }

  if (error) {
    return <ErrorBlock message={error} />;
  }
  return (
    <div>
      <ProductsFilter
        searchTerm={searchTerm}
        category={category}
        sort={sort}
        handleParamChange={handleParamChange}
      />

      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Products List</h1>
        <p>
          Found <strong>{filteredProducts.length}</strong> products
        </p>
      </div>

      <ul className="space-y-2 grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-hidden">
        {filteredProducts.length === 0 && (
          <p className="text-center border border-gray-400 rounded shadow py-3 bg-gray-100">
            No products found
          </p>
        )}
        {paginatedProducts.map((product: Product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>

      {totalPages > 1 && (
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
}
