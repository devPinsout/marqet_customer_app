'use client';

import { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface FilterSheetProps {
  filtersData: Record<string, string[]>;
  selectedOptions: Record<string, string[]>;
  setSelectedOptions: React.Dispatch<React.SetStateAction<Record<string, string[]>>>;
  onApply: (selected: Record<string, string[]>) => void; // Callback for apply
}

export default function FilterSheet({ filtersData, selectedOptions, setSelectedOptions, onApply }: FilterSheetProps) {
  const filterNames = Object.keys(filtersData);
  const [selectedFilter, setSelectedFilter] = useState(filterNames[0]);

  // Temporary state for selected options within the filter sheet
  const [tempSelectedOptions, setTempSelectedOptions] = useState<Record<string, string[]>>({});

  useEffect(() => {
    setTempSelectedOptions(selectedOptions); // Sync with the parent selected options initially
  }, [selectedOptions]);

  const toggleOption = (filter: string, option: string) => {
    const current = tempSelectedOptions[filter] || [];
    const updated = current.includes(option)
      ? current.filter((o) => o !== option)
      : [...current, option];
    setTempSelectedOptions({ ...tempSelectedOptions, [filter]: updated });
  };


  const clearFilters = () => {
    setTempSelectedOptions({});
    setSelectedOptions({}); 
  };

  const applyFilters = () => {
    setSelectedOptions(tempSelectedOptions); 
    onApply(tempSelectedOptions); 
  };

  return (
    <div className="flex flex-col h-[90vh] bg-white rounded-lg overflow-hidden border">
     
      <div className="flex flex-1 overflow-auto">
        {/* Sidebar */}
        <div className="w-1/3 border-r bg-gray-100 p-4">
          {filterNames.map((filter) => (
            <div
              key={filter}
              className={`cursor-pointer py-2 px-3 rounded-md mb-2 font-medium ${
                selectedFilter === filter ? "bg-white text-black" : "text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </div>
          ))}
        </div>

        {/* Filter Options */}
        <div className="w-2/3 p-4 space-y-3">
          <h2 className="text-lg font-semibold">{selectedFilter}</h2>
          {filtersData[selectedFilter].map((option) => (
            <div key={option} className="flex items-center gap-2">
              <Checkbox
                id={option}
                checked={tempSelectedOptions[selectedFilter]?.includes(option) || false}
                onCheckedChange={() => toggleOption(selectedFilter, option)}
              />
              <label htmlFor={option} className="text-sm font-medium">
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="w-screen p-4 flex justify-between bg-white gap-2">
        <Button variant="outline" onClick={clearFilters} className="w-1/2">
          Clear Filter
        </Button>
        <Button onClick={applyFilters} className="w-1/2">
          Apply
        </Button>
      </div>
    </div>
  );
}
