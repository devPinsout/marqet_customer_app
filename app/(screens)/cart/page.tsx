import BackButton from "@/components/backButton";
import BottomNavBar from "@/components/bottomNavbar";
import { CartItem } from "@/components/cartItem";
import { CartSummary } from "@/components/cartSummary";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const cartItems = [
    {
      title: "iphone 14 Pro Max",
      price: 109999,
      quantity: 2,
      image: "/images/iphone2.jpg",
    },
    {
      title: "iphone15",
      price: 11200000,
      quantity: 1,
      image: "/images/iphone.png",
    },
    {
      title: "iphone15",
      price: 11200000,
      quantity: 1,
      image: "/images/iphone.png",
    },
  ];

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-white min-h-screen relative">
      
      <div className="fixed top-0 left-0 right-0 z-50 bg-muted px-2 py-3 flex items-center justify-center">
        <h1 className="text-[18px] font-semibold">My Cart</h1>
      </div>

      <div className="pt-16 pb-24"> 
        <div className="">
          {cartItems.map((item, index) => (
            <CartItem key={index} {...item} />
          ))}

          <div className="px-4">
          <CartSummary total={total} />

<Button className="w-full mt-6" size="lg">
  Proceed to Checkout
</Button>

          </div>

          </div>
      </div>

      <BottomNavBar />
    </div>
  );
}
