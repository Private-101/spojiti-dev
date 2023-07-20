import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, isRouteErrorResponse, useRouteError, useLoaderData } from '@remix-run/react';
import { useEffect, useState } from "react";
import type { Category } from "~/models/category.server";
import { getAllCategories } from '~/models/category.server';
import type { JobPost } from '~/models/job.server';
import { getAllJobPostsByCategory } from '~/models/job.server';

import { useFetcher } from "@remix-run/react";
import JobMenu from "~/experimental/interactive-menu/src/JobMenu";
import type { FormattedCategory, FormattedJobPost } from "~/models/job.server";
import type { JobMenuData } from '~/types';



interface TestLoaderData {
  categories: Category[];
  jobs: JobPost[];
}
export const loader = async ({request}: LoaderArgs) => {
  const searchParams = new URL(request.url).searchParams;
  const selectedCategory = searchParams.has("category") ? searchParams.get("category") : '';
  const categories = await getAllCategories();
  const jobs = await getAllJobPostsByCategory(selectedCategory ?? categories[0].id);
  return json<TestLoaderData>({categories, jobs})
};

// export const action = async ({request}: ActionArgs) => {}

export default function SearchLayoutPage() {
  const {categories, jobs} = useLoaderData<TestLoaderData>();
  
  // const fetcher = useFetcher<JobMenuData>();
  const [allJobs, setAllJobs] = useState<FormattedJobPost[]>([]);
  const [allCategories, setAllCategories] = useState<FormattedCategory[]>([]);
/*
  useEffect(() => {
     if (fetcher.state === "idle" && fetcher.data == null) {
      fetcher.load(`../api/job-menu-data`)
    }
    
  }, [fetcher]);

  useEffect(() => {
    if (fetcher.data) {
      setJobs(fetcher.data.jobs);
      setCategories(fetcher.data.categories);
    }
  }, [fetcher.data]);
*/
  
  return (
    <>
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <main className='grow mt-12'>
        {/** <!-- ===== Main Section Starts ===== --> */}
        <div className='flex flex-1 flex-col justify-center items-center pb-4'>
      <p className="font-bold text-lg">Are you a restaurant looking to hire?</p>
      <Link to='/applicants' className="mb-4 mt-2 p-2 rounded-md font-semibold text-sm transition-all text-sp-primary hover:text-black border-2 border-solid border-black hover:border-sp-primary hover:cursor-pointer hover:shadow-md">
      <p className=''>
        Click Here to Search Applicants
      </p>
      </Link>
      <JobMenu
      // key={`menu-items-${Math.random() * 999}`}
        id={`menu-items`}
        jobs={jobs}
        categories={categories}
        />
    </div>
        {/** <!-- ===== Main Section Ends ===== --> */}
      </main>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </>
  );
};


export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="mt-24">
        <h1>
          Route Error: {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div className="mt-24">
        <h1>Client Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1 className="mt-24">Unknown Error</h1>;
  }
};