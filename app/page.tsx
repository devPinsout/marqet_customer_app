import BottomNavBar from "@/components/bottomNavbar";
import { ImageCarousel } from "@/components/carousel";
import { CategoryCard } from "@/components/category";
import { CollectionSection } from "@/components/collections";
import Search from "@/components/search";
import { Input } from "@/components/ui/input";
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

const items = [
  'Electronics',
  'Fashion',
  'Home Decor',
  'Books',
];


export default function Home() {
  return (
    <div className="bg-accent relative min-h-screen">

<div className="md:hidden px-2 py-5 bg-blue-100 sticky top-0 z-20">
  <Input
    placeholder="Search..."
    className="bg-white h-12 w-full max-w-md p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>


      <div className="pb-20 sm:pb-0"> 
        {/* Categories */}
        <div className="flex overflow-x-auto gap-4 px-2 py-4 scrollbar-hidden">
          {categories.map((cat, index) => (
            <div key={index} className="flex-shrink-0">
              <CategoryCard name={cat.name} imageSrc={cat.imageSrc} />
            </div>
          ))}
        </div>

        {/* Carousel */}
        <div className="container px-2 py-5">
          <ImageCarousel images={images} />
        </div>

        {/* Collections */}
        <div className="flex flex-col bg-white mx-2">
          <CollectionSection heading="Best Deals on Smartphones" products={smartphoneDeals} />
        </div>

        <div className="flex flex-col bg-white mx-2 mt-5">
          <CollectionSection heading="Best Deals on Smartphones" products={smartphoneDeals} />
        </div>
      </div>

      <BottomNavBar />
    </div>
  );
}
