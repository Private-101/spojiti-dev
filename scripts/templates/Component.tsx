import React, {} from 'react';
import {} from '@headlessui/react';
import {} from '@remix-run/react';
import {} from '@remix-run/node';
import type {} from '@remix-run/node';

interface ComponentProps {
    children: React.ReactNode;
};

export default function Component({children}: ComponentProps) {
  return (
    <>
    <div>
      A Component wrapped in jsx tags
      {children}
    </div>
    </>
  );
}
