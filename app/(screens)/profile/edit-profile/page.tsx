"use client";
import BackButton from "@/components/backButton";
import { SearchIcon, ShoppingBag, ShoppingBasket } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";

const steps = [
    { label: "Order placed", date: "Apr 28, 2025", status: "completed" },
    { label: "Order confirmed", date: "Apr 29, 2025", status: "completed" },
    { label: "Shipped", date: "May 1, 2025", status: "completed" },
    { label: "Delivered", date: "Expected: May 4, 2025", status: "pending" },
  ];

export default function OrderDetailPage() {
  const params = useParams();
  const { orderId } = params;

  

  return (
    <div className="">
      <div className="flex justify-between items-center bg-accent px-3">
        <BackButton label="My Profile"/>
        

        <div className="flex gap-4">
            <SearchIcon/>
            <ShoppingBasket/>
        </div>
      </div>

      <div className="p-4 space-y-4 bg-white rounded-md m-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label className="block text-sm text-gray-600 mb-1">First Name</label>
      <input
        type="text"
        placeholder="Enter first name"
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>

    <div>
      <label className="block text-sm text-gray-600 mb-1">Last Name</label>
      <input
        type="text"
        placeholder="Enter last name"
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>

    <div>
      <label className="block text-sm text-gray-600 mb-1">Mobile Number</label>
      <input
        type="tel"
        placeholder="Enter mobile number"
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>

    <div>
      <label className="block text-sm text-gray-600 mb-1">Email</label>
      <input
        type="email"
        placeholder="Enter email"
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
  </div>

  {/* Update Button */}
  <div className="pt-4 w-full">
    <button className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition w-full">
      Update
    </button>
  </div>
</div>




    </div>
  );
}
