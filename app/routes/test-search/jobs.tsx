import * as React from "react";
import { useState, useEffect, Fragment, useRef } from "react";
import { Link, useOutletContext } from '@remix-run/react';
import { json } from "@remix-run/node";
import {
  isRouteErrorResponse, useRouteError
} from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";
// //  import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';
interface TestLoaderData {};

export const loader = async ({request}: LoaderArgs) => {
  return json<TestLoaderData>({})
};

// export const action = async ({request}: ActionArgs) => {}

interface Job {
  id: number;
  title: string;
  company: string;
  imageUrl: string;
  location: string;
  lastUpdated: string;
  salary: string;
  type: string;
};

interface OutletContext {
  jobCards: Job[];
  currentJob: Job | null;
  hidden: boolean;
  setHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SearchLayoutPage() {
  // const { jobCards, currentJob } = useOutletContext<OutletContext>();
  const fakeJobPosts: Job[] = [
    {
        id: 1,
        title: 'Web Developer',
        company: 'Google',
        imageUrl: 'https://via.placeholder.com/50',
        location: 'New York',
        lastUpdated: '1 day ago',
        salary: '$80k - $100k',
        type: 'fulltime'
    }
];

const [jobCards, setJobCards] = useState<Job[]>(fakeJobPosts);
const [currentJob, setCurrentJob] = useState<Job | null>(fakeJobPosts[0]);

  const handleJobCardClick = (jobId: number) => {
    setCurrentJob(jobCards.find(job => job.id === jobId) || null);
};

const handleBookmarkClick = (e: React.MouseEvent) => {
  e.stopPropagation();
  // Handle bookmark logic
}

  return (
    <>
    <div className="left-column w-1/3 pr-4">
            <div id="job-list" className="space-y-4">
                <p>Job List</p>
                {jobCards.map((job, idx) => (
                    <button key={idx} onClick={() => handleJobCardClick(job.id)}>
                        {job.title}
                    </button>
                ))}
            </div>
        </div>
        <div className="right-column w-2/3 pl-4 bg-white shadow-lg p-6 rounded-md">
            <div id="job-details">
                <p>Job Details</p>
                <div id="jobDetails">
                {currentJob && (
                    <>
                        <h1>{currentJob.title}</h1>
                        <p>{currentJob.company} - {currentJob.location}</p>
                        <p>Last updated: {currentJob.lastUpdated}</p>
                        <p>Lorem ipsum dolor sit amet...</p>
                    </>
                )}
            </div>
            </div>
        </div>
    </>
  );
};

export function ErrorBoundary() {
    const error = useRouteError();
  
    if (isRouteErrorResponse(error)) {
      return (
        <div>
          <h1>
            {error.status} {error.statusText}
          </h1>
          <p>{error.data}</p>
        </div>
      );
    } else if (error instanceof Error) {
      return (
        <div>
          <h1>Error</h1>
          <p>{error.message}</p>
          <p>The stack trace is:</p>
          <pre>{error.stack}</pre>
        </div>
      );
    } else {
      return <h1>Unknown Error</h1>;
    }
  }