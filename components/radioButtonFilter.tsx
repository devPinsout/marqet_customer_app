'use client';

import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface RadioFilterProps {
  title: string;
  options: string[];
  selected: string;
  onChange: (value: string) => void;
}

export default function RadioFilter({ title, options, selected, onChange }: RadioFilterProps) {
  return (
    <div>
      <p className="text-xl font-normal text-gray-400 mb-2 px-4">{title}</p>
      <Separator className="bg-gray-300 h-[1px] my-2" />

      <div className="px-4">
        <RadioGroup value={selected} onValueChange={onChange} className="space-y-1">
          {options.map((option) => (
            <div key={option} className="flex items-center justify-between space-x-2">
              <label htmlFor={option} className="text-[16px] font-semibold">
                {option}
              </label>
              <RadioGroupItem value={option} id={option} className="border-2"/>
              
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
}
