import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') 
    .replace(/[\s_-]+/g, '-')  
    .replace(/^-+|-+$/g, ''); 
}

interface CollectionListCardProps {
  imageSrc: string;
  title: string;
  rating: number;
  reviewSummary: string;
  description: string | string[];
  price: number;
  originalPrice?: number;
  discount?: string;
  deliveryDate?: string;
}

export function CollectionListCard({
  imageSrc,
  title,
  rating,
  reviewSummary,
  description,
  price,
  originalPrice,
  discount,
  deliveryDate,
}: CollectionListCardProps) {
  const productSlug = slugify(title); 
  return (
    <Link href={`/product/${productSlug}`} passHref>
      <div className="flex flex-col sm:flex-row justify-between gap-0 sm:gap-10 w-full border border-gray-300 overflow-hidden shadow-sm hover:shadow-md transition duration-200 bg-white px-2 py-2 sm:px-5 sm:py-5 rounded-md cursor-pointer">
        
        {/* Image Section */}
        <div className="relative w-full sm:w-1/3 h-[150px] sm:h-[200px]">
          <Image src={imageSrc} alt={title} layout="fill" objectFit="contain" />
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-3 sm:w-2/3 w-full">
          <h1 className="text-sm sm:text-xl font-semibold">{title}</h1>

          {/* Rating and Review Summary */}
<div className="flex flex-col sm:flex-row gap-1 sm:gap-3">
  <div className="flex items-center justify-center gap-1 bg-green-600 text-white px-2 py-1 rounded-md w-fit">
    <h1 className="text-sm sm:text-base">{rating}</h1>
    <Star width={16} height={16} />
  </div>
  <h1 className="hidden sm:block text-sm sm:text-base">{reviewSummary}</h1>
</div>


         {/* Description Section (hidden on mobile) */}
<div className="hidden sm:block">
  {Array.isArray(description) ? (
    <ul className="list-disc list-inside text-gray-700 text-base">
      {description.map((point, idx) => (
        <li key={idx}>{point}</li>
      ))}
    </ul>
  ) : (
    <p className="text-gray-700 text-base">{description}</p>
  )}
</div>

        </div>

        {/* Price and Delivery Date Section */}
        <div className="flex flex-col gap-2 sm:w-1/4 w-full">
          <h1 className="text-sm sm:text-3xl font-semibold">₹ {price.toLocaleString()}</h1>

          {originalPrice && discount && (
            <div className="flex gap-2 text-sm sm:text-base">
              <h1 className="line-through text-gray-500">₹ {originalPrice.toLocaleString()}</h1>
              <h1 className="text-green-700">{discount}</h1>
            </div>
          )}
{deliveryDate && (
  <div className="hidden sm:flex gap-2 text-base">
    <h1 className="text-gray-500">Delivery by</h1>
    <h1 className="text-foreground font-bold">{deliveryDate}</h1>
  </div>
)}

        </div>
      </div>
    </Link>
  );
}
