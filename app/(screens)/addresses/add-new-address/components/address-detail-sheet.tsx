import { useState } from "react";
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import BackButton from "@/components/backButton";
import Image from "next/image";

export default function AddAddressDetails() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Function to toggle the sheet visibility
  const openSheet = () => setIsSheetOpen(true);
  const closeSheet = () => setIsSheetOpen(false);

  return (
    <div className="w-full h-screen flex flex-col relative">
      {/* Fixed BackButton at the top */}
      <BackButton className="absolute top-4 left-4 z-10 px-3 py-2" label="Add New Address" />

      <div className="h-4/5 flex flex-col">
        {/* Map Section with Search Input */}
        <div className="relative flex-1">
          <Image
            src="/images/map1.jpg"  // Replace with your map image URL
            alt="Map"
            layout="fill"
            objectFit="cover"
            className="rounded-b-xl"
          />
          {/* Search Bar */}
          <div className="absolute top-4 left-4 right-4 z-10 flex items-center bg-white px-3 py-2 rounded-md shadow-md">
            <input
              type="text"
              placeholder="Search location"
              className="w-full outline-none"
            />
          </div>
        </div>
      </div>

      <div className="h-1/5 bg-white px-4 py-4 flex flex-col justify-between">
        {/* Button to open the Add Address sheet */}
        <button 
          onClick={openSheet}
          className="w-full bg-primary text-white py-3 rounded-md shadow hover:bg-primary/90 transition"
        >
          Add Address Details
        </button>
      </div>

      {/* ShadCN Bottom Sheet (Sheet) */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
          <button
            onClick={openSheet}
            className="w-full bg-primary text-white py-3 rounded-md shadow hover:bg-primary/90 transition"
          >
            Add Address Details
          </button>
        </SheetTrigger>

        <SheetContent side="bottom" className="bg-white p-6">
          <SheetTitle>Enter Address Details</SheetTitle>
          <SheetDescription>
            Fill in the details below to save your address.
          </SheetDescription>

          {/* Current Location */}
          <div className="bg-blue-100 p-4 rounded-md mb-4">
            <p className="text-gray-600">Current Location: Chipiyana Buzurg, Ghaziabad, Uttar Pradesh, 201009</p>
          </div>

          {/* Form Inputs */}
          <form className="space-y-4">
            <div>
              <label htmlFor="flat" className="block text-gray-700">Flat Number</label>
              <input
                type="text"
                id="flat"
                name="flat"
                placeholder="Enter Flat Number"
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div>
              <label htmlFor="full-name" className="block text-gray-700">Full Name</label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                placeholder="Enter Full Name"
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div>
              <label htmlFor="mobile" className="block text-gray-700">Mobile Number</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                placeholder="Enter Mobile Number"
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div>
              <label htmlFor="address-type" className="block text-gray-700">Type of Address</label>
              <select
                id="address-type"
                name="address-type"
                className="w-full p-2 border rounded-md"
              >
                <option value="home">Home</option>
                <option value="office">Office</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Submit Button */}
            <div>
              <button type="submit" className="w-full bg-primary text-white py-3 rounded-md shadow hover:bg-primary/90 transition">
                Save Address
              </button>
            </div>
          </form>
        </SheetContent>
      </Sheet>
    </div>
  );
}
