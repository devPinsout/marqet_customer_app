'use client';

import Image from "next/image";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Search, ShoppingBag, UserRound } from "lucide-react";

export default function Navbar() {
  return (
    <div className='p-4 flex items-center justify-between border-b'>
      {/* Logo & Nav Links */}
      <div className="flex items-center gap-10">
        <Link href="/">
          <Image src="/images/logo.png" alt="Logo" width={70} height={50} />
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Search/>
      <Button className="bg-accent-foreground">
        Login
      </Button>
      <Link href='/cart'><ShoppingBag/></Link>
      
      <Link href='/profile'>
      <UserRound/>
      </Link>
      
    
      </div>
      
    </div>
  );
}
