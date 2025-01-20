// src/app/components/

'use client';

import React, { ReactNode } from 'react';

interface ClientWrapperProps {
  children: ReactNode;
  backgroundClass: string;
}

const ClientWrapper: React.FC<ClientWrapperProps> = ({ children, backgroundClass }) => {
  return (
    <div className={backgroundClass}>
      {children}
    </div>
  );
};

export default ClientWrapper;
