// import Header from '../components/Header';
// import Sidebar from '../components/Sidebar';
import { Outlet, Link } from '@remix-run/react';
import WebsiteNavbar from '~/components/tailwind-components/WebsiteNavbar';
import { Fragment, useState, useEffect } from 'react';
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { redirect, json } from "@remix-run/node";
import { Listbox, Transition, Dialog } from "@headlessui/react";
import { Form, useFetcher, useSearchParams, useLoaderData } from "@remix-run/react";
// import { useInfiniteScroll } from 'react-infinite-scroll-hook';

import { CheckIcon } from '@heroicons/react/24/solid';
import { ApplyButtonModal } from '~/components/headlessui/ApplyDialog';

import type { JobPost } from '~/models/job.server';
import type { Category } from "~/models/category.server";
import { getAllCategories } from '~/models/category.server';


import { FiGithub } from 'react-icons/fi';
import { RiMoonClearLine, RiSunLine } from 'react-icons/ri';
import UserPic from '~/components/common/assets/images/user/user-01.png';
import DefaultLayout from '~/components/dashboard/DashboardLayout';

interface TestLoaderData {
  
};

export const loader = async () => {

  return json<TestLoaderData>({  });
};

export default function TestPage() {

  return (
    <>
      {/* <!-- ===== Page Wrapper Start ===== --> */}
        <DefaultLayout>
            <h1>Hello from DashboardLayout!</h1>
        </DefaultLayout>
      {/* <!-- ===== Page Wrapper End ===== --> */}

    </>
  );
};

const Header = () => {
    return (
      <header className='w-full mx-auto max-w-2xl justify-center h-16 pt-4'>
        <div className='flex flex-row px-5'>
          <Avatar image={UserPic} alt='Picture of the Author' />
          <Navigation />
          <HeaderIcons />
        </div>
      </header>
    );
  };

  interface HeaderIconProps {
    onClick?: () => void;
    children: React.ReactNode;
  }
  const HeaderIcon = ({ onClick, children }: HeaderIconProps) => {
    return (
      <button className='cursor-pointer rounded-full text-gray-400 hover:text-orange-400 p-1'
              onClick={onClick}>
        {children}
      </button>
    );
  };

  const ThemeToggle = () => {
  // const { theme, setTheme } = useTheme();
    const setTheme = (msg: string) => console.log(msg);
    const theme: string = 'light';
  return (
    <div className='p-1'>
      <HeaderIcon onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        {theme === 'light' ? <RiMoonClearLine size={25} /> : <RiSunLine size={25} />}
      </HeaderIcon>
    </div>
  );
};

const HeaderIcons = () => {
    return (
      <div className='basis-1/3 flex justify-end'>
        <ThemeToggle />
        <HeaderIcon>
          <Link to='https://github.com/chrismphilp/philp.io'>
            <FiGithub size={25} />
          </Link>
        </HeaderIcon>
      </div>
    );
  };
  
  interface AvatarProps {
    image: string;
    alt: string;
  }
  const Avatar = ({ image, alt }: AvatarProps) => {
    return (
      <div className='basis-1/3 flex items-center'>
        <Link to='/' className='hover:none'>
          <img className='rounded-full shadow-lg ring-[0.85px] ring-orange-400 backdrop-blur mr-4 cursor-pointer hover:ring-[1.15px]'
                 src={image}
                 width={37.5}
                 height={37.5}
                 alt={alt}
                 />
        </Link>
      </div>
    );
  };

  const Navigation = () => {
    return (
      <div className='basis-1/3 px-5'>
        <nav className='flex justify-center text-xl text-gray-400 backdrop-blur'>
          <Link to='/tech' className='cursor-pointer p-2 px-3 hover:text-orange-400'>Tech</Link>
          <Link to='/misc' className='cursor-pointer p-2 px-3 hover:text-orange-400'>Misc</Link>
          <Link to='/favourites' className='cursor-pointer p-2 px-3 hover:text-orange-400'>Favourites</Link>
        </nav>
      </div>
    );
  };

  const Footer = () => {
    return (
      <footer className='bg-sp-body-bg dark:bg-gray-700 text-gray-400 dark:text-gray-100 py-5 border-t border-zinc-300 dark:border-zinc-100'>
        <div className='flex justify-center'>© Matthew Trontz</div>
      </footer>
    );
  };