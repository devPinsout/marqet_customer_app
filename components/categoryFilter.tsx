'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CategoryFilterProps {
  options: string[];
  selected: string;
  onChange: (value: string) => void;
}

export default function CategoryFilter({ options, selected, onChange }: CategoryFilterProps) {
  return (
    <div>
      <p className="text-sm font-medium mb-2">Category</p>
      <Select value={selected} onValueChange={onChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>
        <SelectContent>
          {options.map((opt) => (
            <SelectItem key={opt} value={opt}>
              {opt}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
