"use client";
import BackButton from "@/components/backButton";
import { SearchIcon, ShoppingBag, ShoppingBasket } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import OrderProgress from "../components/orderProgess";

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
    <div className="bg-accent">
      <div className="flex justify-between items-center bg-accent px-3">
        <BackButton label="Order Details"/>
        

        <div className="flex gap-4">
            <SearchIcon/>
            <ShoppingBasket/>
        </div>
      </div>

      <div className="p-3 bg-white">
            <h1 className="text-gray-500">Order ID - 00937489495</h1>
        </div>

        <hr/>

        <div className="flex p-4 w-full bg-white mt-2">
            <div>
                <h1 className="text-[19px]">iphone15 pro Maz with 128 GB RAM</h1>
                <h1 className="text-gray-600 text-sm mt-2">Seller: hfishknasl</h1>
                <h1 className="text-[19px]">Rs. 9042982</h1>
            </div>

            <div>
                <Image src="/images/iphone.png" alt="product" width={100} height={100}/>
            </div>

        </div>

        <hr/>

        <div className="p-4 bg-white mt-2">
  <h2 className="text-lg font-semibold mb-4">Order Progress</h2>

  <OrderProgress steps={steps} />
</div>

<hr/>

   
        <div className="w-full bg-white mt-2">
            <h1 className="p-4 text-gray-500">Shipping details</h1>
            <hr/>

            <div className="flex flex-col p-4">
            <h1 className="text-xl pb-2">Test User</h1>
            <h1>Hno- 115, Green enclave</h1>
            <h1>Chipiyana Buzurg</h1>
            <h1>Ghaziabad</h1>
            <h1>Maharashta - 201009</h1>
            <h1>Phone number: 9812457856</h1>
            </div>
           
        </div>

        <div className="w-full bg-white mt-2">
  <h1 className="p-4 text-gray-500">Price Details</h1>
  <hr />

  <div className="p-4 space-y-2">
    {/* Line Items */}
    <div className="flex justify-between">
      <span>List Price (1 item)</span>
      <span className="line-through text-gray-500">₹9,499</span>
    </div>
    <div className="flex justify-between">
      <span>Selling Price</span>
      <span className="text-green-700 font-semibold">₹7,999</span>
    </div>
    <div className="flex justify-between">
      <span>Delivery Fee</span>
      <span className="text-green-600">Free</span>
    </div>
    <div className="flex justify-between">
      <span>Platform Fee</span>
      <span>₹49</span>
    </div>

    <hr />

    {/* Total Amount */}
    <div className="flex justify-between font-semibold text-lg pt-2">
      <span>Total Amount</span>
      <span>₹8,048</span>
    </div>
  </div>
</div>




    </div>
  );
}
