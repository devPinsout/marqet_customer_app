"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";

interface ProductDetailProps {
  title: string;
  description: string;
  images: string[];
  price: number;
}

export default function ProductDetail({
  title,
  description,
  images,
  price,
}: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  

  return (
    <div className="flex flex-col md:flex-row gap-6 p-4 bg-white">
      {/* Left Section */}
      <div className="flex flex-col-reverse md:flex-row gap-4 md:w-1/2">
        
        {/* Thumbnail list */}
        <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-y-auto md:max-h-[400px]">
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Thumbnail ${index}`}
              width={60}
              height={60}
              className={`cursor-pointer border ${
                selectedImage === img ? "border-blue-500" : "border-gray-300"
              }`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>

        {/* Main Image with buttons below on desktop */}
        <div className="w-full">
          <div className="h-[300px] relative border border-gray-200">
            <Image
              src={selectedImage}
              alt="Selected Product"
              fill
              className="object-contain"
            />
          </div>

          {/* Buttons for desktop only */}
          <div className="hidden w-full md:flex gap-4 mt-4">
            <Button className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white">Add to Cart</Button>
            <Button className="w-1/2 bg-green-600 hover:bg-green-700 text-white">Buy Now</Button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col gap-4 md:w-1/2">
        <h1 className="text-xl sm:text-2xl font-semibold">{title}</h1>
        <p className="text-gray-700 text-sm sm:text-base">{description}</p>
        <h2 className="text-lg sm:text-xl font-bold text-green-700">
          ₹ {price.toLocaleString()}
        </h2>

        {/* Buttons for mobile only */}
        <div className="flex flex-col gap-3 md:hidden mt-2">
          <Button className="w-full bg-accent hover:bg-blue-700 text-black border border-foreground">Add to Cart</Button>
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Buy Now</Button>
        </div>
      </div>
    </div>
  );
}
