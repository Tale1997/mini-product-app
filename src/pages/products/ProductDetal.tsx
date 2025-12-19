import { useParams } from "react-router-dom";
import { useProduct } from "../../features/Products/hooks/useProduct";
import { ProductDetailSkeleton } from "../../features/Products/components/ProductDetailSkletion";
import ErrorBlock from "../../components/layout/ErrorBlock";

export default function ProductDetal() {
  const { id } = useParams<{ id: string | undefined }>();

  const { product, loading, error } = useProduct(id);

  if (loading) return <ProductDetailSkeleton />;
  if (error) return <ErrorBlock message={error} />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 p-4 md:p-8 border border-gray-200 rounded-md shadow-sm">
      <div className="flex justify-center">
        <div className="relative aspect-square w-full max-w-md bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={product?.image}
            alt={product?.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold ">{product?.title}</h2>
        <p className="font-smibold text-lg">{product?.description}</p>

        <span>
          Price:
          <span className="text-green-600 text-md">{product?.price}$</span>
        </span>
      </div>
    </div>
  );
}
