'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function BackButton({ label = '', className = '' }) {
  const router = useRouter();

  return (
    <div className={`w-full py-2 bg-accent sm:hidden flex items-center gap-2 ${className}`}>
      <button
        onClick={() => router.back()}
        className="p-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
      >
        <ArrowLeft />
      </button>
      <span className="text-30px font-medium text-gray-700 capitalize">{label}</span>
    </div>
  );
}
