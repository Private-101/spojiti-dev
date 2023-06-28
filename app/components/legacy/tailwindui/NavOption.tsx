import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { slugify } from '~/utils';

interface NavOptionProps {
    title: string;
    items: {
      title: string; 
      url: string;
    }[];
};

const NavOption: React.FC<NavOptionProps> = ({title, items}) => {
  return (
    <nav>
      {/* Navbar content */}
      <Menu as="div" className="relative inline-block text-left">
        {({ open }) => (
          <>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-0 px-4 py-2 text-md font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <span>{title}</span>
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>

            <Transition
              show={open}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items
                static
                className="absolute right-0 mt-2 origin-top-right bg-sp-body-bg divide-y divide-gray-100 rounded-md shadow-lg outline-none"
              >
                <div className="px-1 py-1">
                    {items.map((item, i) => (
                        <Menu.Item key={i}>
                        {({ active }) => (
                          <a
                            href={item.url}
                            className={`${
                              active ? 'bg-[#f58321] text-white' : 'bg-opacity-50 text-gray-700'
                            } flex justify-between px-4 py-2 text-md leading-5`}
                          >
                            {item.title}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </nav>
  );
}

export default NavOption;
