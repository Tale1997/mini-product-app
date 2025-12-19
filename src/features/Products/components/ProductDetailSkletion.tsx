export const ProductDetailSkeleton = () => {
  return (
    <div className="grid grid-cols-1 h-120 lg:grid-cols-2 gap-8 lg:gap-16 p-4 lg:p-8 border border-gray-200 rounded-md shadow-sm">
      <div className="flex justify-center">
        <div className="relative aspect-square w-full max-w-md bg-gray-200 rounded-lg overflow-hidden animate-pulse" />
      </div>
      <div className="space-y-5">
        <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse" />

        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
        </div>

        <div className="h-5 w-32 bg-gray-200 rounded animate-pulse" />
      </div>
    </div>
  );
};
