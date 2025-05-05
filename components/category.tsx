import Image from "next/image";

interface CategoryCardProps {
  imageSrc: string;
  name: string;
}

export function CategoryCard({ imageSrc, name }: CategoryCardProps) {
  return (
    <div className="flex flex-col justify-center w-[70px] h-[90px] sm:w-[90px] sm:h-[110px] md:w-[100px] md:h-[120px] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-200 bg-white">
      <div className="relative w-full h-[40px] sm:h-[50px] md:h-[60px]">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw"
        />
      </div>
      <div className="px-1 sm:px-2 py-1 text-center">
        <h3 className="text-[10px] sm:text-xs font-medium text-gray-700 truncate">{name}</h3>
      </div>
    </div>
  );
}
