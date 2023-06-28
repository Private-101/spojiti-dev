import * as React from "react";
import { useState, useEffect, Fragment, useRef } from "react";
import { Link } from '@remix-run/react';
import { json } from "@remix-run/node";
import {
  isRouteErrorResponse, useRouteError
} from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";
import type { JobPost } from '~/models/job.server';
import type { Category } from "~/models/category.server";
import { getAllCategories } from '~/models/category.server';
import { getAllJobPostsByCategory } from '~/models/job.server';

import { useFetcher } from "@remix-run/react";
import Footer from '~/components/legacy/temp/Footer';
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

export default function TestLayoutPage() {
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

  
  return (
    <>
      {/* <!-- ===== Page Wrapper Start ===== --> */}
    <div className='flex flex-col min-h-screen font-sans bg-sp-body-bg dark:bg-gray-800'>
   {/* <Header />*/}
      <main className='grow'>
        {/** <!-- ===== Main Section Starts ===== --> */}
        <div className='flex flex-1 flex-col justify-center items-center pb-4'>
      <p>Are you a restaurant looking to hire? Click here to search candidates</p>
      <Link to='/test/search/candidates'>
        Search Candidates
      </Link>
      <JobMenu
        id={`menu-items`}
        jobs={jobs}
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