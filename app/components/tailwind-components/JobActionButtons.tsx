import * as React from "react";
import { ApplyButtonModal } from '~/components/headlessui/ApplyDialog';
import { Fragment, useState, useEffect } from 'react';
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { redirect, json } from "@remix-run/node";
import { Listbox, Transition, Dialog } from "@headlessui/react";
import { Form, useFetcher, useSearchParams, useLoaderData } from "@remix-run/react";
import Application from '~/components/tailwind-components/ApplicationForm';
interface ActionButtonProps {
  onClickApply?: (ev: React.MouseEvent) => void;
  onClickDetails?: (ev: React.MouseEvent) => void;
  classes?: string;
}
export const JobActionButtons = ({ onClickApply, onClickDetails, classes }: ActionButtonProps) => {
    let [isOpen, setIsOpen] = React.useState(false)
    
      function closeModal() {
        setIsOpen(false)
      }
    
      function openModal() {
        setIsOpen(true)
      };
  return (
    <>
      {/*<div className={`flex flex-col items-center justify-center gap-x-6 ${classes ?? ''}`}>*/}
        {/*<button
          type="button"
          onClick={ev => onClickApply(ev)}
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Apply
  </button>*/}
  {/*<ApplyButtonModal />*/}
  <div className="rounded-md bg-sp-primary-light dark:bg-sp-primary-dark mt-2 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sp-primary-light dark:bg-sp-primary-dark/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40 hover:scale-120">
  <div className="relative flex items-center justify-center">
            <button
              type="button"
              onClick={openModal}
              className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              Apply
            </button>
          </div>
    
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>
    
              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    {<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-sp-body-bg p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        {/*Applied Successfully!*/}
                        Unsuccessful!
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          {/*Your application has been successfully submitted. We'll notify you when you get a response..*/}
                          You must be logged in to apply...
                        </p>
                      </div>
    
                      <div className="mt-4">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Got it, thanks!
                        </button>
                      </div>
                    </Dialog.Panel>}
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
  </div>



        {/*<button
          type="submit"
          onClick={ev => onClickDetails(ev)}
          className="rounded-md bg-indigo-600 mt-2 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Details
</button>*/}
      {/*</div>*/}
    </>
  );
};