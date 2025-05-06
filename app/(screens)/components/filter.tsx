"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetClose } from "@/components/ui/sheet";
import CategoryFilter from "@/components/categoryFilter";
import PriceFilter from "@/components/priceFilter";
import BrandFilter from "@/components/brandFilter";
import { Button } from "@/components/ui/button";
import { ChevronDown, Filter } from "lucide-react";
import RadioFilter from "@/components/radioButtonFilter";
import FilterSheet from "@/components/filterSheet";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
  } from "@/components/ui/dialog";
  

export default function FilterSection() {
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState({ min: "", max: "" });
  const [brands, setBrands] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("Price: Low to High");
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string[]>>({});


  const categoryOptions = ["Phones", "Laptops", "Accessories"];
  const brandOptions = ["Apple", "Samsung", "OnePlus", "Sony"];
  const sortOptions = ["Relevance", "Popularity", "Price-- Low to High", "Price-- High to Low", "Newest First"];

  const handleApplyFilters = (newSelectedOptions: Record<string, string[]>) => {
    console.log("Applied Filters:", newSelectedOptions);
    setSelectedOptions(newSelectedOptions); // Update the selected options
  };

  const filtersData = {
    "Price": ["Under ₹500", "₹500 - ₹1000", "Above ₹1000"],
    "Deliver At": ["Delhi", "Mumbai", "Bangalore"],
    "Brand": ["Apple", "Samsung", "OnePlus"],
    "Type": ["Smartphone", "Tablet", "Laptop"],
    "Capacity": ["64GB", "128GB", "256GB"],
    "Star": ["1 Star", "2 Star", "3 Star", "4 Star", "5 Star"],
  };

  return (
    <>
      {/* Desktop Filters */}
      <Card className="hidden lg:block w-full max-w-md p-4 space-y-6">
        <CategoryFilter options={categoryOptions} selected={category} onChange={setCategory} />
        <PriceFilter min={price.min} max={price.max} onChange={setPrice} />
        {/* <BrandFilter options={brandOptions} selected={brands} onChange={setBrands} /> */}
      </Card>

      {/* Mobile Filters */}
      <div className="lg:hidden flex flex-wrap gap-2">
        {/* Category Filter Sheet */}
        {/* <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm" className="px-6 py-4 rounded-full">Category</Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="p-4 h-[60%]">
          <SheetHeader className="hidden"></SheetHeader>
            <CategoryFilter options={categoryOptions} selected={category} onChange={setCategory} />
          </SheetContent>
        </Sheet> */}

        {/* Price Filter Sheet */}
        {/* <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm" className="px-6 py-4 rounded-full">Price</Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="p-4 h-[60%]">
          <SheetHeader className="hidden"></SheetHeader>
            <PriceFilter min={price.min} max={price.max} onChange={setPrice} />
          </SheetContent>
        </Sheet> */}

        {/* Sort Filter Sheet */}
        <Sheet>
          <SheetTrigger asChild>
          <Button variant="outline" size="sm" className="px-6 py-4 rounded-full flex items-center gap-2">
           Sort By
           <ChevronDown className="w-4 h-4" />
         </Button>

          </SheetTrigger>
          <SheetContent side="bottom" className="py-5">
          <SheetHeader className="hidden"></SheetHeader>
          <RadioFilter
  title="Sort By"
  options={sortOptions}
  selected={sortBy}
  onChange={setSortBy}
/>


          </SheetContent>
        </Sheet>

        <Sheet>
          <SheetTrigger asChild>
          <Button variant="outline" size="sm" className="px-6 py-4 rounded-full flex items-center gap-2">
          <Filter className="w-4 h-4" />
           Filter
           
         </Button>

          </SheetTrigger>
          <SheetContent side="left" className="p-0 m-0 h-screen w-screen max-w-full">
          <SheetHeader className="hidden">Hello</SheetHeader>
         
          <div className="w-full h-full">
          <FilterSheet
  filtersData={filtersData}
  selectedOptions={selectedOptions}
  setSelectedOptions={setSelectedOptions}
  onApply={handleApplyFilters} 
/>

           </div> 
          </SheetContent>
        </Sheet>

        

        <Sheet>
          <SheetTrigger asChild>
          <Button variant="outline" size="sm" className="px-6 py-4 rounded-full flex items-center gap-2">
           Brands
           <ChevronDown className="w-4 h-4" />
         </Button>

          </SheetTrigger>
          <SheetContent side="bottom" className="py-5">
          <SheetHeader className="hidden"></SheetHeader>
            <BrandFilter
  options={brandOptions}
  selected={brands}
  onChange={setBrands}
  onApply={(appliedBrands) => {
    console.log("Applied brands:", appliedBrands);
    setSelectedOptions((prev) => ({
      ...prev,
      Brand: appliedBrands,
    }));
  }}
/>

          </SheetContent>
        </Sheet>

{/* Selected Filters Preview */}
{Object.entries(selectedOptions).some(([_, values]) => values.length > 0) && (
  <div className="w-full overflow-x-auto scrollbar-hidden">
    <div className="flex flex-nowrap gap-2 mb-2 px-1">
      {Object.entries(selectedOptions).map(([filter, options]) =>
        options.map((option) => (
          <div
            key={`${filter}-${option}`}
            className="flex items-center gap-2 bg-gray-200 text-sm px-3 py-1 rounded-full whitespace-nowrap"
          >
            <span>{option}</span>
            <button
              onClick={() => {
                const updatedOptions = selectedOptions[filter].filter(
                  (o) => o !== option
                );
                // Update selectedOptions state when an option is removed
                setSelectedOptions({
                  ...selectedOptions,
                  [filter]: updatedOptions,
                });
              }}
              className=" text-accent-foreground rounded-full w-5 h-5 flex items-center justify-center"
            >
              X
            </button>
          </div>
        ))
      )}
    </div>
  </div>
)}

      </div>
    </>
  );
}
