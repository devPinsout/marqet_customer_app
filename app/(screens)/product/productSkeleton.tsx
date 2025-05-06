function ProductDetailSkeleton() {
    return (
      <div className="flex flex-col md:flex-row gap-6 p-4 bg-white animate-pulse">
        <div className="flex flex-col-reverse md:flex-row gap-4 md:w-1/2">
          <div className="flex flex-row md:flex-col gap-2 md:max-h-[400px]">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-[60px] h-[50px] bg-gray-300 rounded" />
            ))}
          </div>
          <div className="w-full">
            <div className="h-[300px] bg-gray-300 rounded" />
            <div className="hidden md:flex gap-4 mt-4">
              <div className="w-1/2 h-10 bg-gray-300 rounded" />
              <div className="w-1/2 h-10 bg-gray-300 rounded" />
            </div>
          </div>
        </div>
  
        <div className="flex flex-col gap-4 md:w-1/2">
          <div className="w-3/4 h-6 bg-gray-300 rounded" />
          <div className="w-full h-16 bg-gray-300 rounded" />
          <div className="w-1/2 h-6 bg-gray-300 rounded" />
          <div className="flex flex-col gap-3 md:hidden mt-2">
            <div className="w-full h-10 bg-gray-300 rounded" />
            <div className="w-full h-10 bg-gray-300 rounded" />
          </div>
        </div>
      </div>
    );
  }
  