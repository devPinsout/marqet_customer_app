'use client';

import { Input } from "@/components/ui/input";

interface PriceFilterProps {
  min: string;
  max: string;
  onChange: (value: { min: string; max: string }) => void;
}

export default function PriceFilter({ min, max, onChange }: PriceFilterProps) {
  return (
    <div>
      <p className="text-sm font-medium mb-2">Price Range</p>
      <div className="flex gap-2">
        <Input
          placeholder="Min"
          value={min}
          onChange={(e) => onChange({ min: e.target.value, max })}
          type="number"
        />
        <Input
          placeholder="Max"
          value={max}
          onChange={(e) => onChange({ min, max: e.target.value })}
          type="number"
        />
      </div>
    </div>
  );
}
