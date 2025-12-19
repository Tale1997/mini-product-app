import { useEffect, useState } from "react";
import type { Product } from "../types/product";
import { getProductsList } from "../services/apiProducts";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await getProductsList();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching users:", err);
        setError(String(err));
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};
