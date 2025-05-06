import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="bg-accent min-h-screen p-4 space-y-6">
      {/* Search bar */}
      <Skeleton className="h-12 w-full rounded-md bg-accent" />

      {/* Category skeletons */}
      <div className="flex gap-4 overflow-x-auto">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="w-20 h-20 rounded-md flex-shrink-0 bg-accent" />
        ))}
      </div>

      {/* Carousel skeleton */}
      <Skeleton className="w-full h-48 rounded-md bg-accent" />

      {/* Collection section skeleton */}
      <div className="space-y-4">
        <Skeleton className="h-6 w-1/2 bg-accent" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-36 w-full rounded-md bg-accent" />
          ))}
        </div>
      </div>
    </div>
  );
}
