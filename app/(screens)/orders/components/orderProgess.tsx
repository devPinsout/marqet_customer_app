"use client";
import React from "react";

interface Step {
  label: string;
  date: string;
  status: string;
}

interface OrderProgressProps {
  steps: Step[];
}

export default function OrderProgress({ steps }: OrderProgressProps) {
  return (
    <div className="relative flex flex-col items-center">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center w-full">
          {/* Line and Dot */}
          <div className="flex flex-col items-center mx-4">
            <div
              className={`w-4 h-4 rounded-full z-10 ${
                step.status === "completed" ? "bg-green-600" : "bg-gray-300"
              }`}
            ></div>

            {index !== steps.length - 1 && (
              <div className="w-px h-14 bg-gray-300" />
            )}
          </div>

          {/* Label and Date */}
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-800">{step.label}</span>
            <span className="text-xs text-gray-500">{step.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
