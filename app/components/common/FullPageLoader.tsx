import React from 'react';
import {Spinner} from '~/components/common/Spinner';

export default function FullPageLoader(): JSX.Element {
  return (
    <div className="flex-1 w-full h-full flex items-center justify-center">
      <div className="text-gray-500 w-8 h-8">
        <Spinner />
      </div>
    </div>
  );
};