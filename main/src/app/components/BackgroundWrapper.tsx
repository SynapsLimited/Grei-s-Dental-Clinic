// src/components/BackgroundWrapper.tsx

'use client'; // Marks this component as a Client Component

import { usePathname } from 'next/navigation';
import React from 'react';

interface BackgroundWrapperProps {
  children: React.ReactNode;
}

const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({ children }) => {
  const pathname = usePathname();

  const getBackgroundClass = (path: string) => {
    switch (path) {
      case '/':
        return 'homepage-background';
      case '/about':
        return 'about-background';
      default:
        return 'services-background';
    }
  };

  return <div className={getBackgroundClass(pathname)}>{children}</div>;
};

export default BackgroundWrapper;
