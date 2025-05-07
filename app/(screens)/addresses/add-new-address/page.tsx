'use client'

import BackButton from "@/components/backButton";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import Link from "next/link";
import { useState } from "react";

export default function AddNewAddress() {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-screen flex flex-col bg-white overflow-hidden">
      
      <div className="bg-accent px-3 shrink-0">
        <BackButton label="Add New Address" />
      </div>

      <div className="flex flex-col h-full">
        
        <div className="flex-1 bg-blue-100 flex items-center justify-center">
          <p className="text-gray-600">Map area placeholder</p>
        </div>

        <div className="h-2/6 bg-white px-4 py-4 flex flex-col gap-4">
        <h1 className="text-sm text-gray-600">Deliver to</h1>
          <div className="flex flex-col gap-2 p-2 bg-white rounded-sm border mt-2">
            <p>C-28/29, BHA Millenium Park Rd, C Block, Phase 2, Industrial Area, Sector 62, Noida</p>
          </div>

          <div className="flex-grow flex items-center justify-center">
        <Button className="w-full max-w-sm" onClick={() => setOpen(true)}>
          Add address details
        </Button>
      </div>

      {/* Sheet from bottom */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="bottom" className="space-y-4">
          <SheetHeader>
            <SheetTitle>Deliver To</SheetTitle>
          </SheetHeader>
          <div className="space-y-2 px-4">
            <div className="p-3 bg-gray-100 rounded-md">📍 Current Location: Delhi, India</div>
            <input placeholder="Flat/House No." className="w-full border p-2 rounded" />
            <input placeholder="Full Name" className="w-full border p-2 rounded" />
            <input placeholder="Mobile Number" className="w-full border p-2 rounded" />
            <input placeholder="Type of Address" className="w-full border p-2 rounded" />

            <Link href="/profile" className="w-full"></Link>
            <Button className="w-full">Save Address</Button>
          </div>
        </SheetContent>
      </Sheet>

        </div>
      </div>
    </div>
  );
}
