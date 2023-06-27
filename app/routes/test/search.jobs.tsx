import * as React from "react";
import { useState, useEffect, Fragment, useRef } from "react";
import { FiGithub } from 'react-icons/fi';
import { RiMoonClearLine, RiSunLine } from 'react-icons/ri';
import UserPic from '~/components/common/assets/images/user/user-01.png';
import type { LinksFunction } from '@remix-run/node';
import { Link, useSearchParams } from '@remix-run/react';
import { json } from "@remix-run/node";
import {
  isRouteErrorResponse, useRouteError
} from "@remix-run/react";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import type { JobPost } from '~/models/job.server';
import type { Category } from "~/models/category.server";
import { getAllCategories } from '~/models/category.server';
import { getAllJobPosts, getAllJobPostsByCategory } from '~/models/job.server';

import { useFetcher, useLoaderData, useHref, useLocation } from "@remix-run/react";
import Footer from '~/components/legacy/temp/Footer';
import JobMenu from "~/experimental/interactive-menu/src/JobMenu";

interface JobMenuLoaderData {
    categories: Category[];
    // jobs: JobPost[];
  }
  export const loader = async ({request}: LoaderArgs) => {
    const categories = await getAllCategories();

    return json<JobMenuLoaderData>({categories})
  };
// export const action = async ({request}: ActionArgs) => {}

interface FormattedCategory {
  id: string;
    createdAt: string;
    updatedAt: string;
    title: string;
    description: string | null;
}
interface FormattedJobPost {
  id: string;
      createdAt: string;
      updatedAt: string;
      title: string;
      description: string;
      is_full_time: boolean;
      start_date: string;
      end_date: string | null;
      responsibilities: string | null;
      requirements: string | null;
      salary_range_min: number;
      salary_range_max: number;
      userId: string;
}
interface JobMenuData {
  categories: Category[];
  jobs: JobPost[];
}
export default function TestLayoutPage() {
  const { categories } = useLoaderData<JobMenuLoaderData>();

  return (
    <>
      {/* <!-- ===== Page Wrapper Start ===== --> */}
    <div className='flex flex-col min-h-screen font-sans bg-sp-body-bg dark:bg-gray-800'>
   {/* <Header />*/}
      <main className='grow'>
        {/** <!-- ===== Main Section Starts ===== --> */}
        <div className='flex flex-1 flex-col justify-center items-center pb-4'>
      <p>Are you a restaurant looking to hire? Click here to search candidates</p>
      <Link to='/search/candidates'>
        Search Candidates
      </Link>
      <JobMenu
        id={`menu-items`}
        // jobs={jobs}
        categories={categories}
        />
    </div>
        {/** <!-- ===== Main Section Ends ===== --> */}
      </main>
      <Footer />
    </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}

    </>
  );
};

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>
          Route Error: {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Client Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
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

  const OldFooter = () => {
    return (
      <footer className='bg-sp-body-bg dark:bg-gray-700 text-gray-400 dark:text-gray-100 py-5 border-t border-sp-primary border-opacity-60 dark:border-opacity-100'>
        <div className='flex justify-center'>© spojiti.com</div>
      </footer>
    );
  };