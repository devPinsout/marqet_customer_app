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
  ];

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-muted min-h-screen relative">
      <div className="pb-24 px-4 pt-4">
        <h1 className="text-xl font-semibold mb-4">Your Cart</h1>

        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <CartItem key={index} {...item} />
          ))}
        </div>

        <CartSummary total={total} />

        <Button className="w-full mt-6" size="lg">
          Proceed to Checkout
        </Button>
      </div>

      <BottomNavBar />
    </div>
  );
}
