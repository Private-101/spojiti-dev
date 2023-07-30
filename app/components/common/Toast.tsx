import React from 'react';
import { Transition } from '@headlessui/react';

interface ToastProps {
  show: boolean;
  message: string;
}

export function Toast({ message, show }: ToastProps): JSX.Element {
  return (
    <Transition
      appear
      show={show}
      className="flex items-center justify-items-center rounded-lg border-2 border-sp-primary bg-neutral-50 dark:bg-neutral-700 transition transform-gpu duration-200"
      enterFrom="opacity-0 scale-75"
      enterTo="opacity-100 scale-100"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-75"
    >
      <span className="px-4 py-2 text-md text-neutral-700 dark:text-neutral-50">
        {message}
      </span>
    </Transition>
  );
}