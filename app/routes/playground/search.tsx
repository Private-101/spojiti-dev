import type { LoaderArgs, ActionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Link, isRouteErrorResponse, useRouteError, useSearchParams, Form } from '@remix-run/react';
import { useEffect, useState } from "react";
import { useFetcher, Outlet } from "@remix-run/react";
import JobMenu from "~/experimental/interactive-menu/src/JobMenu";
import type { FormattedCategory, FormattedJobPost } from "~/models/job.server";
import type { JobMenuData } from '~/types';
import {UsersList} from '~/components/pico/UserList';
import { DropdownButton, type IDropdownButtonItemProps } from "~/components/playground/DropdownButton";
import ColumnsRoute from '~/experimental/pages/columns';
import type { IUserCardProps } from '~/temp/dev/types';
import PageContainer from "~/components/common/PageContainer";
import React from 'react';
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { classNames } from "~/utils";
function Header() {

  return (
    <header className="bg-neutral-900 text-white">
      <div className="container mx-auto max-w-6xl flex justify-between items-center h-16 px-6 xl:px-0">
        <Link to="/">
          <div className="font-semibold text-3xl">spojiti<i className="text-sp-primary font-normal ml-1">.com</i>
            </div>
         </Link>

        <div>
          <nav className="gap-5 grid-flow-col h-10 text-sm hidden md:grid">
            <Link to="/search">
              <span
                className="cursor-pointer bg-sp-primary border-2 border-sp-primary bg-opacity-10 rounded-md flex items-center justify-center px-4 w-40 min-h-full font-semibold">
                Find a job
              </span>
            </Link>
            <Link to='/jobs' className="flex items-center justify-center px-4">Jobs</Link>
            <Link to='/pricing' className="flex items-center justify-center px-4">Pricing</Link>
            <Link to='profile' className="flex items-center justify-center px-4">
              <UserCircleIcon className="w-6 h-6" />
            </Link>
          </nav>

          <div className="md:hidden">
            <ArrowDownTrayIcon className="w-6 h-6 " />
          </div>
        </div>

      </div>
    </header>
  );
};

function Hero() {

  return (
    <section className="px-2 pt-32 pb-20 bg-gray-900 md:px-0">
      <div className="container items-center max-w-6xl px-5 mx-auto space-y-6 text-center">
        <h1
          className="text-4xl font-extrabold tracking-tight text-left text-white sm:text-5xl md:text-6xl md:text-center">
            <span className="block">Get The <span
              className="block mt-1 text-sp-primary lg:inline lg:mt-0">Right Job</span> You Deserve</span>
        </h1>
        <p
          className="w-full mx-auto text-base text-left text-neutral-300 sm:text-lg lg:text-2xl md:max-w-3xl md:text-center pb-5">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Don't waste time, start your search for a new job here!
        </p>
        {/** hidden */}
        <div className="relative flex flex-col justify-center md:flex-row md:space-x-4">
          <a href="#_"
             className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-purple-500 rounded-md md:mb-0 hover:bg-purple-700 md:w-auto">
            Find a job
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a href="#_"
             className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">
            Find a contractor
          </a>
        </div>
      </div>
    </section>
  );
};

interface ISearchParams {
  keyword: string;
  location: string;
}

interface Props {
  className?: string;
}

function SearchBar({ className }: Props) {
  
//let handleSearch: React.FormEventHandler<HTMLFormElement> = (event) => {}
  /*async function onSubmit({ keyword, location }: ISearchParams) {
    const query = {
      keyword: '',
      location: ''
    };

    if (keyword) {
      query['keyword'] = keyword;
    }

    if (location) {
      query['location'] = location;
    };

    setSearchParams(query);
  }*/

  return (
    <div className={classNames("container max-w-screen-lg mx-auto", className ?? '')}>
        <Form className="flex flex-col shadow-md md:flex-row bg-white p-0 md:p-2 mx-5 md:mx-0 rounded-xl">
          <div className="flex-1 flex py-0 flex-col md:flex-row">
            <label className="flex-1 flex items-center justify-center mx-3 my-5 md:my-0 md:mx-0">
              <MagnifyingGlassIcon className="ml-3 w-5 h-5 text-gray-400 hidden md:block" />
              <input 
              name="keywords" 
              type='text'
              className="flex-1 outline-none border-none py-0 px-1 md:py-2 md:px-3 placeholder:text-sm text-base font-normal"
              placeholder="Search keywords, jobs, companies" 
              />
            </label>
            <label className="flex-1 flex items-center justify-center border-l-0 md:border-l border-t md:border-t-0">
              <input
              name="locations"
              type='text'
              className="flex-1 outline-none border-none focus:outline-none mx-3 my-5 md:my-0 md:py-2 px-1 md:px-3 placeholder:text-sm text-base font-normal"
              placeholder="Enter comma-seperated cities, states, and zipcodes" 
              />
            </label>

          </div>
          <button
            className="m-3 mt-0 md:m-0 px-10 h-12 flex items-center justify-center font-normal bg-sp-primary transition-colors hover:bg-blue-200 text-sm rounded-lg md:min-w-auto text-white"
            placeholder="e.g. Brighton, London">
            Search
          </button>
        </Form>
    </div>
  );
}


/*
interface ISearchParamsOptions {
    userType: 'employer' | 'applicant' | 'guest';
}
*/

interface SearchLoaderData {
  searchtype: string;
  usertype: string;
};

enum UserTypesEnum {
    GUEST,
    EMPLOYER,
    APPLICANT
};

enum SearchTypesEnum {
  EMPLOYERS,
  APPLICANTS
};

export const loader = async ({request}: LoaderArgs) => {
  /* const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  const userType = searchParams.get('user-type');
  if (!userType) {
    searchParams.set('user-type', UserTypesEnum.GUEST.toString());
    return redirect(`${url}?${searchParams}`);
  };
  const searchType = searchParams.get('search-type');
  if (!searchType) {
    searchParams.set('search-type', SearchTypesEnum.EMPLOYERS.toString());
    return redirect(`${url}?${searchParams}`);
  };

  switch (userType) {
    case UserTypesEnum.EMPLOYER.toString():
        break;
    case UserTypesEnum.APPLICANT.toString():
        break;
    case UserTypesEnum.GUEST.toString():
        break;
    default:
        break;
  } */
  // if (url.pathname !== '/search/jobs') return redirect('/search/jobs');
  return json({});
  // return json<SearchLoaderData>({searchtype: searchType, usertype: userType});
  /*const searchParams = new URL(request.url).searchParams;
  const selectedCategory = searchParams.has("category") ? searchParams.get("category") : '';
  const categories = await getAllCategories();
  const jobs = await getAllJobPostsByCategory(selectedCategory ?? categories[0].id);
  return json<TestLoaderData>({categories, jobs})*/
};

export const action = ({request}: ActionArgs) => {
  return null;
}

export default function SearchLayoutPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keywords = searchParams.get('keywords');
  const locations = searchParams.get('locations');
  const [sanitizedKeyowrds, setSanitizedKeywords] = useState<string[] | undefined>(undefined)
  const [sanitizedLocations, setSanitizedLocations] = useState<string[] | undefined>(undefined)
  
  // console.log(keywords ?? 'no keywords');
  
  // console.log(location ?? 'no location');
  
  const fetcher = useFetcher<JobMenuData>();
  const [jobs, setJobs] = useState<FormattedJobPost[]>([]);
  const [categories, setCategories] = useState<FormattedCategory[]>([]);

  useEffect(() => {
    if (fetcher.state === "idle" && fetcher.data == null) {
      fetcher.load(`../../api/job-menu-data`);
    }
    
  }, [fetcher]);

  useEffect(() => {
    if (fetcher.data) {
      setJobs(fetcher.data.jobs);
      setCategories(fetcher.data.categories);
    }
  }, [fetcher.data]);

useEffect(() => {
  if (keywords) {
    setSanitizedKeywords(keywords?.split(',').map((key) => key.trim().toLowerCase()));
  };

  if (locations) {
    setSanitizedLocations(locations?.split(',').map((loc) => loc.trim().toLowerCase()))
  }
}, [keywords, locations]);

const items: IDropdownButtonItemProps[] = [
  {title: 'item 1'}, {title: 'item 2'}, {title: 'item 3'}, {title: 'item 4'}
]
  
  return (
    <>
      {/* <!-- ===== Page Wrapper Start ===== --> */}
    <div className='flex flex-col m-0 min-w-full min-h-screen bg-sp-body-bg'>
   {/* <Header />*/}
   <Header />
   {/*<div className='flex flex-1 flex-col justify-center items-center pb-4'>
      <p className="font-bold text-lg">Are you a restaurant looking to hire?</p>
      <Link to='/search/jobs' className="mb-4 mt-2 p-2 rounded-md font-semibold text-sm transition-all text-sp-primary hover:text-black border-2 border-solid border-black hover:border-sp-primary hover:cursor-pointer hover:shadow-md">
      <p className=''>
        Click Here to Search Jobs
      </p>
      </Link>
  </div>*/}
  <Hero />
  <SearchBar className="-mt-8" />
  <div className="text-center text-lg mt-4">
          <strong>{jobs.length}</strong> jobs found for <strong>{sanitizedKeyowrds?.join(', ')}</strong> in <strong>{sanitizedLocations?.join(', ')}</strong>.
        </div>
   <main className='flex flex-col justify-around items-center mt-5'>
        {/** <!-- ===== Main Section Starts ===== --> */}
        {/* flex flex-col md:flex-row justify-around items-center
         md:grid-cols-2 md:gap-4
         md:col-span-2 
        */}
    <div id="filters" className="grid grid-cols-1 grid-rows-2 gap-2 mb-6 mt-6 w-3/4">
      <div id="filter-row" className="col-span-1 row-span-1 flex flex-col md:flex-row justify-around items-center">
      <DropdownButton title="Date posted" size="sm" items={items} />
      <DropdownButton title="Job type" size="sm" items={items} />
      <DropdownButton title="Experience level" size="sm" items={items} />
      <DropdownButton title="Location" size="sm" items={items} />
      <DropdownButton title="Pay" size="sm" items={items} />
      </div>
      <div id="filter-row" className="col-span-1 row-span-1 flex flex-col md:flex-row justify-around items-center self-end">
      <DropdownButton title="Within 25 miles" size="sm" items={items} />
      <DropdownButton title="Shift and schedule" size="sm" items={items} />
      <DropdownButton title="Encouraged to apply" size="sm" items={items} />
      <DropdownButton title="Company" size="sm" items={items} />
      <DropdownButton title="Posted by" size="sm" items={items} />
      </div>
    </div>
    <ColumnsRoute categories={categories} jobs={jobs} />
        {/** <!-- ===== Main Section Ends ===== --> */}
      </main>
    </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}

    </>
  );
};


    export function ErrorBoundary() {
      const error = useRouteError();
    
      if (isRouteErrorResponse(error)) {
        return (
          <div className="flex flex-col items-center justify-center text-slate-800 dark:text-slate-200 max-w-150">
            <h1 className="text-3xl font-semibold mb-8">
              Playground Client Error: {error.status} {error.statusText}
            </h1>
            <p className="border-2 border-red-500 text-lg font-normal">{error.data}</p>
          </div>
        );
      } else if (error instanceof Error) {
        return (
          <div className="flex flex-col items-center justify-center text-slate-800 dark:text-slate-200 max-w-150">
            <h1 className="text-3xl font-bold mb-8">Client Error</h1>
            <div className="border-2 border-red-500 text-lg font-normal">
            <p className="mb-2">{error.message}</p>
            <p className="font-semibold text-xl">The stack trace is:</p>
            <pre className="">{error.stack}</pre>
            </div>
          </div>
        );
      } else {
        return (
          <div className="flex flex-col items-center justify-center text-slate-800 dark:text-slate-200">
              <h1 className="text-3xl font-bold">Unknown Error</h1>
          </div>
        );
      }
    };