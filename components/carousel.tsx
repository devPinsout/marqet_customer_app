"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface ImageCarouselProps {
  images: { src: string; alt?: string }[];
  interval?: number; // autoplay delay in ms
}

export function ImageCarousel({
  images,
  interval = 3000,
}: ImageCarouselProps) {
  const nextRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    const autoplay = setInterval(() => {
      nextRef.current?.click(); // simulate next slide
    }, interval);

    return () => clearInterval(autoplay);
  }, [interval]);

  return (
    <div className="relative w-full">
      <Carousel>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div
                className="relative w-full h-[150px] sm:h-[300px] md:h-[400px]"
              >
                <Image
                  src={image.src}
                  alt={image.alt || `Slide ${index + 1}`}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Arrows overlaid on image */}
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white shadow-md" />
        <CarouselNext
          ref={nextRef}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white shadow-md"
        />
      </Carousel>
    </div>
  );
}
