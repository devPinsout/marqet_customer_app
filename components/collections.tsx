import Image from "next/image";
import Link from "next/link";
import slugify from "slugify";

interface Product {
  imageSrc: string;
  text: string;
}

interface CollectionSectionProps {
  heading: string;
  products: Product[];
}

export function CollectionSection({ heading, products }: CollectionSectionProps) {
  return (
    <div className="px-2 py-6">
      <h2 className=" text-xl sm:text-2xl font-bold text-gray-800 mb-4">{heading}</h2>
      <div className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hidden">
        {products.map((product, index) => (
          <Link
            key={index}
            href={`/collections/${slugify(heading.toLowerCase())}`}
          >
            <div className="min-w-[140px] sm:min-w-[200px] bg-white overflow-hidden hover:shadow-md transition duration-300">
              <div className="relative w-full h-[140px] sm:h-[200px]">
                <Image
                  src={product.imageSrc}
                  alt={product.text}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-2 text-center">
                <p className="text-xs sm:text-sm font-medium text-gray-700">
                  {product.text}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
