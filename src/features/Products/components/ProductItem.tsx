import type { Product } from "../types/product";
import { Link } from "react-router-dom";

export default function ProductItem({ product }: { product: Product }) {
  return (
    <li className="group border border-gray-200  pb-4 rounded-md shadow-sm hover:shadow-md transition-all">
      <Link to={`/products/${product.id}`} className="flex flex-col h-full">
        <div className="relative aspect-square w-full mb-4 overflow-hidden  rounded-md  bg-white">
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            className="w-full h-full object-contain mix-blend-multiply p-4 transition-transform group-hover:scale-105"
          />
        </div>

        <div className="flex flex-col grow px-2">
          <h2 className="font-medium text-gray-900 line-clamp-2 mb-2">
            {product.title}
          </h2>

          {product.price !== undefined && (
            <p className="mt-auto text-green-700 font-bold text-lg">
              ${product.price.toFixed(2)}
            </p>
          )}
        </div>
      </Link>
    </li>
  );
}
