import {
  dropdownItems,
  navigation,
  userNavigation,
} from "~/components/legacy/tailwindui/any/constants"; 
import { classNames } from '~/utils';
import { Fragment } from "react";
import { Link, NavLink, useLocation } from "@remix-run/react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

import NavOption from "~/components/legacy/tailwindui/NavOption";
// import SpojitiLogoUrl from '~/components/common/assets/spojiti-logo.svg';
// import { useRootLoaderData, type RootLoaderData, type UserProps } from '~/root';

export default function Navbar() {
  // const { hash } = useLocation();
  // TODO: replace with types from db
  // const { user } = useRootLoaderData();
  return (
    <div className="min-w-full">
      <Disclosure
        as="nav"
        className="fixed top-0 z-10 w-full rounded-sm bg-sp-primary"
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Link to="/home">
                      <img
                        className="inline-block h-12 w-16"
                        src='/assets/spojiti-logo.svg'
                        alt="Spojiti Logo"
                      />
                    </Link>
                  </div>
                  <div className="hidden lg:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {Object.entries(dropdownItems).map(
                        ([dropdownName, links], i) => (
                          <NavOption
                            title={dropdownName}
                            items={links}
                            key={i}
                          />
                        )
                      )}
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            // item.current
                            // hash === item.href
                            //   ? "bg-sp-body-bg bg-opacity-20 hover:text-black"
                            //   : "bg-opacity-0 hover:bg-opacity-20",
                            "bg-opacity-0 hover:bg-opacity-20",
                            "text-md bg-sp-body-bg rounded-md px-3 py-2 font-medium text-white"
                          )}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <Link
                    to="/join"
                    className="text-md mr-4 rounded-md bg-gray-700 bg-opacity-0 px-3 py-2 font-bold text-white hover:bg-opacity-60"
                  >
                    Join Us
                  </Link>
                  <Link
                    to="/login"
                    className="text-md mr-4 rounded-md bg-gray-700 bg-opacity-0 px-3 py-2 font-medium text-white hover:bg-opacity-60"
                  >
                    Login
                  </Link>
                </div>

                <div className="-mr-2 flex lg:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-sp-primary p-2 text-gray-800 hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
              {/* ... */}
            </div>
            <Disclosure.Panel className="lg:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      // item.current
                        // ? "bg-gray-900 text-white"
                        // : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "bg-opacity-0 hoer:bg-opacity-20",
                      "block rounded-md px-3 py-2 text-md font-medium text-white bg-sp-body-bg"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <div className="border-t border-gray-700 pb-3 pt-4">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    {/*user ? (
                      <>
                      <img
                      className="h-10 w-10 rounded-full"
                      src={user.avatarUrl}
                      alt={`${user.userId} avatar`}
                    />
                      </>
                    ): (
                    <> */}
                      <img
                      className="h-10 w-10 rounded-full"
                      src='/assets/spojiti-logo.svg'
                      alt={'Spojiti Logo'}
                    />
                    {/*  </>
                    )*/}
                  </div>
                  <div className="ml-3">
                    {/* user ? (
                      <>
                      <div className="text-base font-medium leading-none text-white">
                      {user.name}
                    </div>
                    <div className="text-sm font-medium leading-none text-gray-400">
                      {user.email}
                    </div>
                      </>
                    ) : (
                      <> */}
                      <div className="text-base font-medium leading-none text-white">
                      GUEST USER
                    </div>
                    {/*  </>
                    )*/}
                  </div>
                  <button
                    type="button"
                    className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 space-y-1 px-2">
                  {userNavigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

/*
import { Fragment } from "react";
import { Link, NavLink } from "@remix-run/react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

import NavOption from "~/components/tailwindui/NavOption";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Home", href: "#top", current: true },
  { name: "Help", href: "#help", current: false },
  { name: "Pricing", href: "#pricing", current: false },
  { name: "Contact Us", href: "#contact-us", current: false },
  // { name: 'Sign Up', href: '/sign-up', current: false },
  // { name: 'Login', href: '/login', current: false },
];
/*
<ul className="flex items-center gap-4">
        {Object.entries(dropdownItems).map(([dropdownName, links], i) => (
            <SpojitiDropdown key={i} title={dropdownName} links={links} />
        ))}
          <li><a href="/help" className="hover:underline">Help</a></li>
          <li><a href="/pricing" className="hover:underline">Pricing</a></li>
          <li><a href="/contact-us" className="hover:underline">Contact Us</a></li>
          <li><a href="/sign-up" className="hover:underline">Sign Up</a></li>
          <li><a href="/login" className="hover:underline">Login</a></li>
        </ul>
/

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

const dropdownItems = {
  Candidates: ["Find Job", "Post Resume", "Company Listings"],
  Employers: ["Find Candidates", "Post Job", "Pricing"],
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <>
      <div id="#top" className="min-h-full">
        <Disclosure as="nav" className="bg-[#f58321]">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <a href="#">
                        <img
                          className="inline-block h-12 w-16"
                          src="https://spojiti.com/wp-content/uploads/2023/01/SPOJITI-LOGO-OFFSET-MED-LRG.png"
                          alt="Spojiti Logo"
                        />
                      </a>
                    </div>
                    <div className="hidden lg:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                        {Object.entries(dropdownItems).map(
                          ([dropdownName, links], i) => (
                            <NavOption
                              title={dropdownName}
                              items={links}
                              key={i}
                            />
                          )
                        )}

                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                                item.current
                                  ? 'bg-gray-900 text-white'
                                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'rounded-md px-3 py-2 text-sm font-medium')}
                                {/*aria-current={item.current ? `${item.name}` : undefined}/}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="-mr-2 flex lg:hidden">
                    {/* Mobile menu button /}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="lg:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}

/*<div className="hidden lg:block">
                                        <div className="ml-4 flex items-center lg:ml-6">
                                            <button
                                                type="button"
                                                className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                            >
                                                <span className="sr-only">View notifications</span>
                                                <BellIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>

                                            {/* Profile dropdown /}
                                            <Menu as="div" className="relative ml-3">
                                                <div>
                                                    <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                        <span className="sr-only">Open user menu</span>
                                                        <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                                                    </Menu.Button>
                                                </div>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-sp-body-bg py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        {userNavigation.map((item) => (
                                                            <Menu.Item key={item.name}>
                                                                {({ active }) => (
                                                                    <a
                                                                        href={item.href}
                                                                        className={classNames(
                                                                            active ? 'bg-gray-100' : '',
                                                                            'block px-4 py-2 text-sm text-gray-700'
                                                                        )}
                                                                    >
                                                                        {item.name}
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                        ))}
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </div>
                                    </div>*/
