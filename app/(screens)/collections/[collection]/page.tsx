"use client";

import { useState, useEffect } from "react";
import BackButton from "@/components/backButton";
import { CollectionListCard } from "@/components/collectionListCard";
import { useParams } from "next/navigation";
import FilterSection from "../../components/filter";
import { Skeleton } from "@/components/ui/skeleton";
import SkeletonCard from "@/components/skeletonCard";
import { Input } from "@headlessui/react";

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
  // Other product objects...
];

export default function CollectionPage() {
  const params = useParams();
  const collectionName = params?.collection;

  const [loading, setLoading] = useState(true);

  // Simulate loading delay (you can replace this with actual data fetching logic)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 3 seconds
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-accent min-h-screen">

   <div className="sticky top-0 z-50 bg-accent px-4">
    <div className="flex gap-4">
      <BackButton label={collectionName?.toString().replace(/-/g, " ")} />
    </div>
    </div>
      

      <div className="bg-white p-4">

      <Input
    placeholder="Search..."
    readOnly
    className="bg-white h-12 w-full mb-4 max-w-md p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
          {/* Filter Section */}
          <div className="w-full lg:w-1/5">
            {loading ? (
              <Skeleton className="w-full hidden sm:block h-100 bg-gray-300 rounded-md" />
            ) : (
              <FilterSection />
            )}
          </div>

          {/* Product List */}
          <div className="w-full lg:w-4/5">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-1 sm:gap-4">
              {loading ? (
                // Display Skeleton Cards for products
                Array(6)
                  .fill(0)
                  .map((_, index) => <SkeletonCard key={index} />)
              ) : (
                // Display actual products once loading is complete
                products.map((product, index) => (
                  <CollectionListCard key={index} {...product} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
