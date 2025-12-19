import { useEffect, useState } from "react";
import type { Product } from "../types/product";
import { getProductDetail } from "../services/apiProducts";

export function useProduct(id: string | undefined) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!id) {
      setProduct(null);
      setLoading(false);
      setError("");
      return;
    }

    const fetchProduct = async () => {
      setLoading(true);
      try {
        const data = await getProductDetail(id);
        setProduct(data);
      } catch (err) {
        console.error("Error fetching product:", err);
        setError(String(err));
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  return { product, loading, error };
}
