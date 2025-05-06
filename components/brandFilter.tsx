'use client';

import { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

interface BrandFilterProps {
  options: string[];
  selected: string[];
  onChange: (value: string[]) => void;
  onApply: (value: string[]) => void;
}

export default function BrandFilter({ options, selected, onChange, onApply }: BrandFilterProps) {
  const [tempSelected, setTempSelected] = useState<string[]>(selected);

  useEffect(() => {
    setTempSelected(selected); // Sync when parent updates
  }, [selected]);

  const toggleBrand = (brand: string) => {
    if (tempSelected.includes(brand)) {
      setTempSelected(tempSelected.filter((b) => b !== brand));
    } else {
      setTempSelected([...tempSelected, brand]);
    }
  };

  const clearSelection = () => {
    setTempSelected([]); 
    onChange([]); 
    onApply([]); 
  };

  const applySelection = () => {
    onChange(tempSelected); // update parent state
    onApply(tempSelected);  // trigger any UI updates or console logs
  };

  return (
    <div>
      <p className="text-xl font-normal text-accent-foreground mb-2 px-4">Filters</p>
      <Separator className="bg-gray-300 h-[1px] my-2" />

      <div className="px-4 py-5">
        <div className="grid grid-cols-2 gap-2 mb-4">
          {options.map((brand) => (
            <div key={brand} className="flex items-center gap-2">
              <Checkbox
                id={brand}
                checked={tempSelected.includes(brand)}
                onCheckedChange={() => toggleBrand(brand)}
                className="h-5 w-5 border-2"
              />
              <label htmlFor={brand} className="text-[17px] font-normal">
                {brand}
              </label>
            </div>
          ))}
        </div>

        <div className="flex justify-between gap-4 mt-10">
          <Button variant="outline" className="flex-1" onClick={clearSelection}>
            Clear
          </Button>
          <Button className="flex-1" onClick={applySelection}>
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
}
