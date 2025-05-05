import ProductDetail from "@/components/productDetailCard";


export default function ProductPage() {
  const product = {
    title: "iPhone 14 (128GB, Midnight)",
    description:
      "Experience the power of A15 Bionic chip with advanced dual-camera system and all-day battery life.",
    price: 79999,
    images: [
      "/images/iphone.png",
      "/images/iphone2.jpg",
      "/images/iphone3.jpg",
      "/images/phone1.jpg",
    ],
  };

  return (
    <div className="max-w-6xl mx-auto mt-0 sm:mt-10">
      <ProductDetail {...product} />
    </div>
  );
}
