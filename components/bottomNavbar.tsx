"use client";

import Link from "next/link";
import { Home, ShoppingCart, User } from "lucide-react";
import { usePathname } from "next/navigation";

export default function BottomNavBar() {
  const pathname = usePathname();

  const linkClasses = (path: string) =>
    `flex flex-col items-center ${
      pathname === path ? "text-blue-600" : "text-gray-700"
    } hover:text-blue-600`;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow md:hidden">
      <div className="flex justify-around items-center py-2">
        <Link href="/" className={linkClasses("/")}>
          <Home size={24} />
          <span className="text-xs">Home</span>
        </Link>
        <Link href="/cart" className={linkClasses("/cart")}>
          <ShoppingCart size={24} />
          <span className="text-xs">Cart</span>
        </Link>
        <Link href="/profile" className={linkClasses("/profile")}>
          <User size={24} />
          <span className="text-xs">Profile</span>
        </Link>
      </div>
    </nav>
  );
}
