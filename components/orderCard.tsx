'use client'

import Image from "next/image";
import { Star } from "lucide-react"; // optional rating icon
import { useState } from "react";



interface OrderItemProps {
    imageUrl: string;
    name: string;
    deliveryDate: string;
    isDelivered: boolean;
    rating?: number | null; // 👈 optional rating prop
  }
  
  export function OrderItem({
    imageUrl,
    name,
    deliveryDate,
    isDelivered,
    rating = null,
  }: OrderItemProps) {
    const [userRating, setUserRating] = useState<number | null>(rating);
  
    return (
      <div className="bg-white p-4 rounded-md shadow-sm flex gap-4 items-start">
        {/* product image */}
        <Image src={imageUrl} alt={name} width={80} height={80} className="rounded" />
  
        <div className="flex-1">
          <h3 className="font-medium text-base">{name}</h3>
  
          <p className="text-sm text-gray-500 mt-1">
            {isDelivered ? "Delivered on" : "Expected by"} {deliveryDate}
          </p>
  
          {/* Star Rating for Delivered Products */}
          {isDelivered && (
            <div className="mt-2 flex items-center gap-1 text-yellow-600">
              {Array.from({ length: 5 }, (_, i) => {
                const starValue = i + 1;
                return (
                  <Star
                    key={i}
                    className={`w-5 h-5 cursor-pointer transition ${
                      userRating !== null && starValue <= userRating
                        ? "fill-yellow-500"
                        : "fill-none stroke-yellow-500"
                    }`}
                    onClick={() => setUserRating(starValue)}
                  />
                );
              })}
              {userRating && (
                <span className="text-sm text-black ml-2">{userRating}/5</span>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
  