export function ProductListSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 h-100 w-200 lg:grid-cols-4 gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="border border-gray-200 pb-4 h-full rounded-md shadow-sm"
        >
          <div className="flex flex-col h-full animate-pulse">
            <div className="aspect-square w-full mb-4 bg-gray-200 rounded-t-md" />

            <div className="flex flex-col grow px-2 space-y-3">
              <div className="h-4 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-200 rounded w-3/4" />

              <div className="mt-auto h-6 bg-gray-200 rounded w-1/4" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
