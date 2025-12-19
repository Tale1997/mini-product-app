import type { Product } from "../types/product";

const API_BASE_URL = "https://fakestoreapi.com/products";

export const getProductsList = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}`);

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const data: Product[] = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching products:", err);
    throw err;
  }
};

export const getProductDetail = async (id: string): Promise<Product> => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching product:", err);
    throw err;
  }
};
