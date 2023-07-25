import * as React from "react";
import { useState, useEffect, Fragment, useRef } from "react";
import { Link, useOutletContext } from '@remix-run/react';
import { json } from "@remix-run/node";
import {
  isRouteErrorResponse, useRouteError
} from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";
// //  import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';
interface TestLoaderData { };

export const loader = async ({ request }: LoaderArgs) => {
  return json<TestLoaderData>({})
};

// export const action = async ({request}: ActionArgs) => {}

interface IDemoJobDetails {
  id: string;
  companyName: string;
  initialAvatar: string;
  jobTitle: string;
  location: string;
  updatedDate: string;
  salary: string;
  type: string;
  url: string;
};

export default function SearchLayoutPage() {
  const [jobDetails, setJobDetails] = useState<IDemoJobDetails[] | null>(null);
  const [currentJob, setCurrentJob] = useState<IDemoJobDetails | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    function getDetails(index: number) {
      const employmentTypes = ["Full-time", "Part-time", "Special Event"];
      const id = `job-id-${index}`;
      const companyName = `company-${index}`;
      const initialAvatar = `${index}`;
      const jobTitle = `job-title-${index}`;
      const location = `job-location-${index}`;
      const updatedDate = new Date().toString();
      const salaryLow = Math.round(Math.random() * 15);
      const salaryHigh = Math.round(Math.random() * 65);
      const salary = `$ ${salaryLow}/hr - $ ${salaryHigh}/hr`;
      const type = employmentTypes[Math.round(Math.random() * employmentTypes.length)];
      const url = `/jobs/${index}`;
      return { id, companyName, initialAvatar, jobTitle, location, updatedDate, salary, type, url };
    };

    if (jobDetails !== null) {
      setCurrentJob(jobDetails[0]);
    } else {
      let jobCardDetails: IDemoJobDetails[] = [];
      for (let i = 0; i < 20; i++) {
        let details = getDetails(i);
        jobCardDetails.push(details);
      };
      setJobDetails(jobCardDetails);
    };
  }, [jobDetails]);

  const handleJobCardClick = (jobId: string) => {
    if (jobDetails &&jobDetails.length > 0) {
    setCurrentJob(jobDetails.find(job => job.id === jobId) || null);
    };
  };

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Handle bookmark logic
  }

  

  const postsPerPage = 6;

  const categories = Array.from({ length: 25 }, (_, i) => `Category ${i + 1}`);
  const blogPosts = Array.from({ length: 20 }, (_, i) => ({
    title: `Blog Post ${i + 1}`,
    description: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`.repeat(5),
    date: `2020-01-${String(i + 1).padStart(2, '0')}`,
    image: 'https://via.placeholder.com/200',
    readingTime: Math.ceil(Math.random() * 10),
    categories: categories.slice(0, Math.floor(Math.random() * 4 + 1))
  }));

  function filterJobCards(searchText: string) {
    const cards = document.getElementsByClassName('job-card') as HTMLCollectionOf<HTMLElement>;
    Array.from(cards).forEach((card) => {
        const cardText = card.innerText.toLowerCase();
        if (cardText.includes(searchText.toLowerCase())) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}



  return (
    <>
    <div className="container overflow-hidden mx-auto p-4 h-full w-full my-4 px-2">
        <div className="flex justify-center items-center">
            <input id="search-bar" className="border-2 border-gray-300 bg-white h-10 w-full pl-2 rounded-l-full text-sm focus:outline-none" type="text" placeholder="Search" />
            <button id="search-btn" className="bg-gray-400 text-white transition duration-150 ease-in-out hover:bg-blue-600 border-blue-600 h-10 w-10 flex items-center justify-center rounded-r-full font-semibold">
                <svg className="h-6 w-6 pr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
< path d = "M10 18C13.866 18 17 14.866 17 11C17 7.13401 13.866 4 10 4C6.13401 4 3 7.13401 3 11C3 14.866 6.13401 18 10 18Z" stroke = "currentColor" stroke - width = "2" strokeLinecap = "round" stroke - linejoin = "round" /> <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>


                </svg>
            </button>
        </div>
      <div className="left-column w-1/3 pr-4">
        <div id="job-list" className="space-y-4">
          <p>Job List</p>
          <JobList quantity={jobDetails ? jobDetails.length : 0} details={jobDetails || []} onJobCardClick={handleJobCardClick} />
          {/*jobCards.map((job, idx) => (
            <>
            <div id="job-posts" className="mt-6 space-y-4 overflow-y-scroll h-screen snap-proximity snap-y">
            <button key={idx} >
              {job.title}
            </button>
            {/*<!-- Job cards will be generated here -->/}
        </div>
            </>
            
          ))*/}
        </div>
      </div>
    </div>
      <div className="right-column w-2/3 pl-4 bg-white shadow-lg p-6 rounded-md">
        <div id="job-details">
          <p>Job Details</p>
          <div id="jobDetails">
            {currentJob && (
              <>
                <h1>{currentJob.jobTitle}</h1>
                <p>{currentJob.companyName} - {currentJob.location}</p>
                <p>Last updated: {currentJob.updatedDate}</p>
                <p>Lorem ipsum dolor sit amet...</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

interface IDemoJobCardProps {
  index: number;
  details: IDemoJobDetails | null;
  onJobCardClick: (id: string) => void;
};

function Card({ index, details, onJobCardClick }: IDemoJobCardProps) {
  const briefcaseIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block mr-1" viewBox="0 0 20 20" fill="currentColor"><path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v2h2a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V8a2 2 0 012-2h2V4z"></path></svg>`;
  const clockIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block mr-1" viewBox="0 0 20 20" fill="currentColor"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 110-12 6 6 0 010 12zM9 9a1 1 0 012 0V5a1 1 0 11-2 0v4zM7 12a1 1 0 110-2h4a1 1 0 110 2H7z"/></svg>`;
  const usdIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block fill-current stroke-black mr-1" viewBox="0 0 20 20"><path d="M10.5 0C6.313 0-.098 2.443 0 10.5c0 8.312 3.402 11.494 3.402 11.494 3.437 3.058 7.037-3.092 7.098-3.094.089-.003.289-.014.481-.02l.019-.005v-.777l-.018.008c.371-3.242.168-5.526-5.551-5.527-2.338 0-4.711.263-6.372-.735C1.291 9.731 2 7.057 2 7.057c1.17-5.529 4.898-6.611 8.5-7 0 .25 0 .5.038 1.485.724-1.26 1.963-2.541 3.233-1.851 1.761.963 3.011 3.967 1.729 8.327"/></svg>`;
  const bookmarkIcon = `<svg id="bookmark-icon-svg" class="h-8 w-8 inline-block mr-1 fill-current" width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
< path d = "M8 3H16C17.6569 3 19 4.34315 19 6V22L12 19L5 22V6C5 4.34315 6.34315 3 8 3Z" stroke = "#000" stroke - width = "1" strokeLinecap = "round" stroke - linejoin = "round" />


  </svg>`;

  if (!details || !details.id) {
    return null;
  };

  return (
    <>
      <div id="job-card" onClick={() => onJobCardClick(details.id)/* or index? */} className="bg-white p-5 rounded-lg shadow-md flex flex-col space-y-3 border border-blue-400 snap-always snap-start job-card">
      <div className="flex">
        <div className="rounded-full h-12 w-12 object-cover bg-gray-300 ml-3 flex items-center justify-center text-sm">
          <span>${details.initialAvatar}</span>
        </div>
        <div className="ml-3 flex-grow">
          <h3 className="font-semibold">${details.jobTitle}</h3>
          <p>${details.companyName}</p>
        </div>
        <div id="bookmark" className="inline-flex text-white hover:text-blue-400 transition duration-150 ease-in-out h-10 w-10 items-center justify-center font-semibold cursor-pointer">
          ${bookmarkIcon}
          <span id="title" className="sr-only">Bookmark</span>
          <span id="bookmark-id" className="sr-only">${details.id}</span>
        </div>
      </div>
      <p className="mt-2">${briefcaseIcon}${details.type}</p>
      <p className="mt-2">${clockIcon}Last updated: ${details.updatedDate}</p>
      <p className="mt-2">${usdIcon}Salary range: $${details.salary}</p>
    </div >
    </>
  );
};

interface IJobListProps {
  onJobCardClick: (id: string) => void;
  details: IDemoJobDetails[];
  quantity: number;
};

function JobList({ quantity, details, onJobCardClick }: IJobListProps) {
  

  return (
    <>
    <div id="job-posts" className="mt-6 space-y-4 overflow-y-scroll h-screen snap-proximity snap-y">
    {
      quantity !== 0 ? (
        Array.from({ length: quantity }).map((_, index) => (
          <Card key={`job-card-${index}`} index={index} details={details[index]} onJobCardClick={() => onJobCardClick(details[index].id)} />
        ))
      ) : (
        <p>No Jobs Found</p>
      )
    }
    </div>
    </>
  )
}

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