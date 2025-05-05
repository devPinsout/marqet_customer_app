"use client"

import { CollectionListCard } from "@/components/collectionListCard";
import { useParams } from "next/navigation";

const products = [
  {
    imageSrc: "/images/iphone.png",
    title: "iPhone 13 (256GB RAM)",
    rating: 4.2,
    reviewSummary: "1,998 Ratings & 180 Reviews",
    description: [
      "256GB storage capacity",
      "A15 Bionic chip for performance",
      "Super Retina XDR display",
    ],
    price: 50000,
    originalPrice: 70000,
    discount: "36% off",
    deliveryDate: "11 PM, Tomorrow",
  },
  {
    imageSrc: "/images/phone1.jpg",
    title: "iPhone 13 (256GB RAM)",
    rating: 4.2,
    reviewSummary: "1,998 Ratings & 180 Reviews",
    description: [
      "256GB storage capacity",
      "A15 Bionic chip for performance",
      "Super Retina XDR display",
    ],
    price: 50000,
    originalPrice: 70000,
    discount: "36% off",
    deliveryDate: "11 PM, Tomorrow",
  },
  {
    imageSrc: "/images/iphone3.jpg",
    title: "iPhone 13 (256GB RAM)",
    rating: 4.2,
    reviewSummary: "1,998 Ratings & 180 Reviews",
    description: [
      "256GB storage capacity",
      "A15 Bionic chip for performance",
      "Super Retina XDR display",
    ],
    price: 50000,
    originalPrice: 70000,
    discount: "36% off",
    deliveryDate: "11 PM, Tomorrow",
  },
  {
    imageSrc: "/images/iphone2.jpg",
    title: "iPhone 14 (128GB RAM)",
    rating: 4.5,
    reviewSummary: "2,300 Ratings & 220 Reviews",
    description:
      "The iPhone 14 comes with improved battery life, enhanced camera features, and A15 Bionic performance.",
    price: 60000,
    originalPrice: 75000,
    discount: "20% off",
    deliveryDate: "Tomorrow",
  },
];


export default function CollectionPage() {
  const params = useParams();
  const collectionName = params?.collection;

  return (
    <div className="bg-accent">

      <div className="bg-white px-2 py-5 flex flex-col gap-5">
      <h1 className="text-lg sm:text-2xl font-bold capitalize">
  {collectionName?.toString().replace(/-/g, " ")}
</h1>
<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-2">
      {products.map((product, index) => (
        <CollectionListCard key={index} {...product} />
      ))}
    </div>
      </div>
      
    </div>
  );
}
