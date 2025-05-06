"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";
import { useKeenSlider } from "keen-slider/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";


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
  const [isLoading, setIsLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-6 p-4 bg-white">
      {/* Mobile Carousel */}
      <div className="md:hidden w-full">
  {isLoading ? (
    <Skeleton className="w-full h-[300px] bg-accent" />
  ) : (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="w-full h-[300px] swiper-custom"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-[280px]">
            <Image
              src={img}
              alt={`Image ${index}`}
              fill
              className="object-contain"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )}

  
</div>

{/* Color Variant Thumbnails below Swiper (Mobile View) */}
<div className="flex flex-col">
<h1 className="text-sm font-semibold">Color</h1>
<div className="flex items-center gap-3 overflow-x-auto md:hidden">
 
  {images.map((img, index) => (
    <div
      key={index}
      className={`w-[80px] h-[100px] flex p-2 rounded border cursor-pointer ${
        selectedImage === img ? "border-blue-500" : "border-gray-300"
      }`}
      onClick={() => {
        setSelectedImage(img);
        // Sync main image with swiper slide
        const swiperEl = document.querySelector(".swiper") as any;
        if (swiperEl && swiperEl.swiper) {
          swiperEl.swiper.slideTo(index);
        }
      }}
    >
      <Image
        src={img}
        alt={`Variant ${index}`}
        width={60}
        height={50}
        className="object-fill rounded"
      />
    </div>
  ))}
</div>

</div>



      {/* Desktop View */}
      <div className="hidden md:flex md:flex-row gap-4 md:w-1/2">
        {/* Thumbnails */}
        <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-y-auto md:max-h-[400px]">
          {isLoading
            ? Array(4)
                .fill(0)
                .map((_, index) => (
                  <Skeleton key={index} className="w-[60px] h-[50px] rounded bg-accent" />
                ))
            : images.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index}`}
                  width={60}
                  height={50}
                  className={`p-2 cursor-pointer border ${
                    selectedImage === img ? "border-blue-500" : "border-gray-300"
                  }`}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
        </div>

        {/* Main Image */}
        <div className="w-full">
          <div className="h-[300px] relative border border-gray-200">
            {isLoading ? (
              <Skeleton className="w-full h-full bg-accent" />
            ) : (
              <Image
                src={selectedImage}
                alt="Selected Product"
                fill
                className="object-contain"
              />
            )}
          </div>

          {/* Buttons - desktop */}
          <div className="hidden w-full md:flex gap-4 mt-4">
            {isLoading ? (
              <>
                <Skeleton className="w-1/2 h-10 rounded bg-accent" />
                <Skeleton className="w-1/2 h-10 rounded bg-accent" />
              </>
            ) : (
              <>
                <Button className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white">Add to Cart</Button>
                <Button className="w-1/2 bg-green-600 hover:bg-green-700 text-white">Buy Now</Button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col gap-4 md:w-1/2">
        {isLoading ? (
          <>
            <Skeleton className="h-6 w-3/4 bg-accent" />
            <Skeleton className="h-4 w-full bg-accent" />
            <Skeleton className="h-4 w-5/6 bg-accent" />
            <Skeleton className="h-6 w-1/4 bg-accent" />
            <div className="flex flex-col gap-3 md:hidden mt-2">
              <Skeleton className="w-full h-10 rounded bg-accent" />
              <Skeleton className="w-full h-10 rounded bg-accent" />
            </div>
          </>
        ) : (
          <>
            <h1 className="text-xl sm:text-2xl font-semibold">{title}</h1>
            <p className="text-gray-700 text-sm sm:text-base">{description}</p>
            <h2 className="text-lg sm:text-xl font-bold text-green-700">
              ₹ {price.toLocaleString()}
            </h2>

            {/* Mobile buttons */}
            <div className=" w-full flex  gap-3 md:hidden mt-2">
              <Button className="w-1/2 bg-accent hover:bg-blue-700 text-black border border-foreground">Add to Cart</Button>
              <Button className="w-1/2 bg-green-600 hover:bg-green-700 text-white">Buy Now</Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
