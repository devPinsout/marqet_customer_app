// components/SkeletonCard.tsx\
import { Skeleton } from "@/components/ui/skeleton"


const SkeletonCard = () => {
  return (
    <div className="w-full h-[300px] p-4 rounded-lg bg-accent">
      <Skeleton className="h-48  rounded-md mb-4 bg-accent" />
      <Skeleton className="h-6  rounded-md mb-2 bg-accent" />
      <Skeleton className="h-4  rounded-md w-2/3 mb-4 bg-accent" />
    </div>
  );
};

export default SkeletonCard;
