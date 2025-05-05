import BottomNavBar from "@/components/bottomNavbar";
import { ImageCarousel } from "@/components/carousel";
import { CategoryCard } from "@/components/category";
import { CollectionSection } from "@/components/collections";
import Image from "next/image";

const smartphoneDeals = [
  { imageSrc: "/images/iphone.png", text: "iPhone 14 - ₹79,999" },
  { imageSrc: "/images/phone1.jpg", text: "Samsung S23 - ₹69,999" },
  { imageSrc: "/images/phone1.jpg", text: "Redmi Note 12 - ₹14,999" },
  { imageSrc: "/images/phone1.jpg", text: "OnePlus Nord - ₹24,999" },
];


const categories = [
  { name: "Electronics", imageSrc: "/images/tv.png" },
  { name: "Fashion", imageSrc: "/images/tv.png" },
  { name: "Home Decor", imageSrc: "/images/tv.png" },
  { name: "Books", imageSrc: "/images/tv.png" },
  { name: "Electronics", imageSrc: "/images/tv.png" },
  { name: "Fashion", imageSrc: "/images/tv.png" },
  { name: "Home Decor", imageSrc: "/images/tv.png" },
  { name: "Books", imageSrc: "/images/tv.png" },
  { name: "Electronics", imageSrc: "/images/tv.png" },
  { name: "Fashion", imageSrc: "/images/tv.png" },
  { name: "Home Decor", imageSrc: "/images/tv.png" },
  { name: "Books", imageSrc: "/images/tv.png" },
];

const images = [
  { src: "/images/banner5.jpg", alt: "First Slide" },
  { src: "/images/banner5.jpg", alt: "Second Slide" },
  { src: "/images/banner5.jpg", alt: "Third Slide" },
];

export default function Home() {
  return (
    <div className="bg-accent relative min-h-screen">
      <div className="pb-20 sm:pb-0"> 
        {/* Categories */}
        <div className="flex overflow-x-auto gap-4 px-6 py-4 scrollbar-hidden">
          {categories.map((cat, index) => (
            <div key={index} className="flex-shrink-0">
              <CategoryCard name={cat.name} imageSrc={cat.imageSrc} />
            </div>
          ))}
        </div>

        {/* Carousel */}
        <div className="container px-5 py-5">
          <ImageCarousel images={images} />
        </div>

        {/* Collections */}
        <div className="flex flex-col bg-white mx-5">
          <CollectionSection heading="Best Deals on Smartphones" products={smartphoneDeals} />
        </div>

        <div className="flex flex-col bg-white mx-5 mt-5">
          <CollectionSection heading="Best Deals on Smartphones" products={smartphoneDeals} />
        </div>
      </div>

      <BottomNavBar />
    </div>
  );
}
