import BackButton from "@/components/backButton";
import BottomNavBar from "@/components/bottomNavbar";
import { OrderItem } from "@/components/orderCard";
import { ProfileSection } from "@/components/profileSection";
import { Button } from "@/components/ui/button";
import { UserProfileCard } from "@/components/userProfileCard";
import Link from "next/link";

export default function OrderPage() {
  // Sample orders list
  const orders = [
    {
      productName: "Wireless Earbuds",
      productImage: "/images/iphone.png",
      isDelivered: true,
      deliveryDate: "2025-05-01",
      rating: 4.5,
    },
    {
      productName: "Bluetooth Speaker",
      productImage: "/images/iphone2.jpg",
      isDelivered: false,
      deliveryDate: "",
      expectedDate: "2025-05-10",
    },
    {
      productName: "Smart Watch",
      productImage: "/images/iphone3.jpg",
      isDelivered: true,
      deliveryDate: "2025-04-25",
      rating: 5,
    },
  ];

  return (
    <div className="bg-muted min-h-screen md:px-20">
      <BackButton label="My Orders" />

      <div className="flex flex-col">
    

{orders.map((order, index) => (
  <div key={index}>
    <Link href={`/orders/${index}`}>
      <OrderItem
        name={order.productName}
        imageUrl={order.productImage}
        isDelivered={order.isDelivered}
        deliveryDate={order.deliveryDate}
        rating={order.rating}
      />
    </Link>
    {index !== orders.length - 1 && (
      <div className="border-t border-gray-200" />
    )}
  </div>
))}

      </div>
    </div>
  );
}
