import React, {} from 'react';
// import {} from '@headlessui/react';
// import {} from '@remix-run/react';
// import {} from '@remix-run/node';
// import type {} from '@remix-run/node';

interface ComponentProps {
    children: React.ReactNode;
};

export const Component: React.FC<ComponentProps> = ({children}) => {
  return (
    <>
    <div>
      A Function Component wrapped in jsx tags
      {children}
    </div>
    </>
  );
}