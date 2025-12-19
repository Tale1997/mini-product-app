import { useMemo, useState } from "react";
import type { Product } from "../types/product";

interface UseProductsListArgs {
  products: Product[];
  search: string;
  category: string;
  sort: string;
  itemsPerPage?: number;
}

export function useProductsList({
  products,
  search,
  category,
  sort,
  itemsPerPage = 5,
}: UseProductsListArgs) {
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter((p) => p.title.toLowerCase().includes(q));
    }

    if (category) {
      result = result.filter((p) => p.category === category);
    }

    if (sort === "price-asc") {
      result.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sort === "price-desc") {
      result.sort((a, b) => Number(b.price) - Number(a.price));
    }

    return result;
  }, [products, search, category, sort]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [filteredProducts, currentPage, itemsPerPage]);

  return {
    filteredProducts,
    paginatedProducts,
    currentPage,
    setCurrentPage,
    totalPages,
  };
}
