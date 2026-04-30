import React from 'react';

interface PlaceholderProps {
  text: string;
  className?: string;
}

export function Placeholder({ text, className = "" }: PlaceholderProps) {
  return (
    <div className={`w-full h-full min-h-[300px] bg-gray-200 dark:bg-gray-800 animate-pulse rounded-2xl flex items-center justify-center text-gray-500 font-medium border border-gray-300 dark:border-gray-700 p-6 text-center ${className}`}>
      [Placeholder: {text}]
    </div>
  );
}
