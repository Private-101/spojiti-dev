import type { LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Link, isRouteErrorResponse, useRouteError } from '@remix-run/react';
import { useEffect, useState } from "react";

import { useFetcher, Outlet } from "@remix-run/react";
import JobMenu from "~/experimental/interactive-menu/src/JobMenu";
import type { FormattedCategory, FormattedJobPost } from "~/models/job.server";
import type { JobMenuData } from '~/types';
import {UsersList} from '~/components/pico/UserList';
import { DropdownButton, type IDropdownButtonItemProps } from "~/components/playground/DropdownButton";
import ColumnsRoute from '~/experimental/pages/columns';
/*
interface TestLoaderData {
  categories: Category[];
  jobs: JobPost[];
}

interface ISearchParamsOptions {
    userType: 'employer' | 'applicant' | 'guest';
}
*/

enum UserTypesEnum {
    EMPLOYER,
    APPLICANT,
    GUEST
};

export const loader = async ({request}: LoaderArgs) => {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  const userType = searchParams.get('userType');
  if (!userType) {
    searchParams.set('userType', UserTypesEnum.GUEST.toString());
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
  }
  // if (url.pathname !== '/search/jobs') return redirect('/search/jobs');
  return json({});
  /*const searchParams = new URL(request.url).searchParams;
  const selectedCategory = searchParams.has("category") ? searchParams.get("category") : '';
  const categories = await getAllCategories();
  const jobs = await getAllJobPostsByCategory(selectedCategory ?? categories[0].id);
  return json<TestLoaderData>({categories, jobs})*/
};

// export const action = async ({request}: ActionArgs) => {}

export default function SearchLayoutPage() {
  /*
  const fetcher = useFetcher<JobMenuData>();
  const [jobs, setJobs] = useState<FormattedJobPost[]>([]);
  const [categories, setCategories] = useState<FormattedCategory[]>([]);

  useEffect(() => {
    if (fetcher.state === "idle" && fetcher.data == null) {
      fetcher.load(`api/job-menu-data`)
    }
    
  }, [fetcher]);

  useEffect(() => {
    if (fetcher.data) {
      setJobs(fetcher.data.jobs);
      setCategories(fetcher.data.categories);
    }
  }, [fetcher.data]);
*/

const items: IDropdownButtonItemProps[] = [
  {title: 'item 1'}, {title: 'item 2'}, {title: 'item 3'}, {title: 'item 4'}
]
  
  return (
    <>
      {/* <!-- ===== Page Wrapper Start ===== --> */}
    <div className='flex flex-col m-0 min-w-0 min-h-screen leading-5 font-sans bg-sp-body-bg dark:bg-gray-800'>
   {/* <Header />*/}
   <div className='flex flex-1 flex-col justify-center items-center pb-4'>
      <p className="font-bold text-lg">Are you a restaurant looking to hire?</p>
      <Link to='/search/jobs' className="mb-4 mt-2 p-2 rounded-md font-semibold text-sm transition-all text-sp-primary hover:text-black border-2 border-solid border-black hover:border-sp-primary hover:cursor-pointer hover:shadow-md">
      <p className=''>
        Click Here to Search Jobs
      </p>
      </Link>
    </div>
   <main className='flex flex-col justify-around items-center mt-12'>
        {/** <!-- ===== Main Section Starts ===== --> */}
        {/* flex flex-col md:flex-row justify-around items-center
         md:grid-cols-2 md:gap-4
         md:col-span-2 
        */}
    <div id="filters" className="grid grid-cols-1 grid-rows-2 gap-2 mb-6 w-3/4">
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
    <ColumnsRoute />
        {/** <!-- ===== Main Section Ends ===== --> */}
      </main>
    </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}

    </>
  );
};

/*<div
  data-qa-id="search-results-wrapper"
  data-element="Results"
  data-component="SearchResultsWrapper"
  data-source-file="SearchResultsWrapper.tsx"
  class="flex-grow flex-shrink self-stretch leading-5 bg-white lg:w-0 lg:flex-shrink-0 lg:flex-grow-0 text-neutral-800 will-change-transform"
  style="flex-basis: calc(58% - 194.3px); z-index: 1;"
>
<a
  aria-label="Search result number 1: Gloria M."
  role="group"
  href="https://www.rover.com/members/gloria-m-dog-loving-couple-with-lots-of-room/?service_type=overnight-boarding&amp;frequency=onetime&amp;pet_type=dog"
  rel="noreferrer"
  target="_blank"
  class="absolute top-0 left-0 w-full h-full leading-5 text-blue-600 cursor-pointer hover:text-blue-800 focus:text-blue-800"
  style="text-decoration: none; z-index: 1;"
></a>

</div>



 <div
  data-element="Wrapper"
  data-component="StickySidebar"
  data-source-file="StickySidebar.tsx"
  className="flex relative basis-80 flex-grow-0 flex-shrink-0 self-stretch mx-1 leading-5 md:block text-neutral-800"
>
<div
  className="px-2 pt-2 pb-0 m-0 min-w-0 leading-5 text-neutral-800 border-2 border-black"
  data-element="Box"
  data-component="CollectionWrapper"
  data-source-file="CollectionWrapper.tsx"
></div>

</div>


*/


    

    /*<UsersList />*/