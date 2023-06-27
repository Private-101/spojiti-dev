import { Fragment, useState, useEffect } from 'react';
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { redirect, json } from "@remix-run/node";
import { Listbox, Transition, Dialog } from "@headlessui/react";
import { Form, useFetcher, useSearchParams, useLoaderData } from "@remix-run/react";

export function ApplyButtonModal() {

    let [isOpen, setIsOpen] = useState(false)
    
      function closeModal() {
        setIsOpen(false)
      }
    
      function openModal() {
        setIsOpen(true)
      };
    // fixed inset-0 flex items-center justify-center
      // uppercase inline-block mt-8 text-sm bg-sp-body-bg py-2 px-4 rounded font-semibold hover:bg-indigo-100
      // fixed inset-0 flex items-center justify-center 
      return (
        <>
          <div className="uppercase inline-block mt-8 text-lg bg-transparent hover:bg-sp-body-bg/20 text-white py-2 px-4 rounded font-semibold">
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
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-sp-body-bg p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        We're Sorry,
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          You must be logged in before applying to any jobs.
                        </p>
                      </div>
    
                      <div className="mt-4">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-sp-primary/60 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-sp-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Log In/Sign Up
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </>
      )
    };
    