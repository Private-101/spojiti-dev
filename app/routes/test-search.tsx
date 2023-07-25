import React, { useState, useEffect, useCallback } from 'react';
import { redirect, json } from "@remix-run/node";
import type { LoaderFunction, LoaderArgs } from "@remix-run/node";
import {
	Outlet,
	useLoaderData,
    Link,
	type ShouldReloadFunction,
} from "@remix-run/react";
import { classNames } from '~/utils';
interface ITestItem {
    id: number;
    label: string;
}
export async function loader({request,}: LoaderArgs) {
    let url = new URL(request.url);
    if (url.pathname.match(/^\/tabs\/?$/)) {
    return redirect("/tabs/jobs");
  };

  return null;
}

export const unstable_shouldReload: ShouldReloadFunction = ({ submission }) =>
	!!submission &&
	["/login", "/logout", "/items"].some((pathname) =>
		submission.action.startsWith(pathname)
	);

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

export default function TestSearchPage() {
	// const { items } = useLoaderData<typeof loader>();
    // const [currentTab, setCurrentTab] = useState<number>(0);
    const [hidden, setHidden] = useState<boolean>(true);

    const closeDropdownMenu = useCallback((e: MouseEvent) => {
        if (!hidden) {
        const parentTarget = (e.target as HTMLElement).parentElement
        if (!parentTarget || parentTarget.id !== "dropdownMenu") {
          // click is outside of dropdown list
          setHidden(true);
        }
      }}, [hidden]);

      useEffect(() => {
        // const dropdownMenu = document.getElementById("dropdownMenu");
        if (!hidden) {
            document.addEventListener("click", closeDropdownMenu);
            return () => {
                document.removeEventListener("click", closeDropdownMenu);
            }
        };
      }, [closeDropdownMenu, hidden]);

	return (
		<>
        <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-2 flex items-center">
            <div className="logo flex-auto">
                <img src="https://via.placeholder.com/50" alt="Logo" className="h-8" />
            </div>
            <div className="searchbar flex-auto relative">
                <input type="text" id="searchbar" placeholder="Search jobs..." className="border border-gray-300 rounded-md w-full pl-8 pr-10 py-1" />
< svg className = "absolute top-2 left-2 h-4 w-4 text-gray-400" viewBox = "0 0 24 24" fill = "none" xmlns = "http://www.w3.org/2000/svg" > <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"></circle>
<path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2"></path></svg>

                <button id="clearSearch" className="absolute top-1 right-2 w-5 h-5 text-gray-400" onClick={() => { /* Clear search logic */ }}>
< svg viewBox = "0 0 24 24" fill = "none" xmlns = "http://www.w3.org/2000/svg" > <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2"></path>
<path d="M6 6l12 12" stroke="currentColor" strokeWidth="2"></path></svg>

                </button>
            </div>
            <div className="avatar relative cursor-pointer">
                <img src="https://via.placeholder.com/32" alt="account avatar" className="rounded-full" onClick={() => { /* Toggle dropdown logic */ }} />
                <ul id="dropdownMenu" className={classNames('absolute bg-white right-0 mt-2 p-2 shadow-lg rounded-md', hidden ? 'hidden' : 'block')}>
                    <li><Link to="profile" className="block px-4 py-1 hover:bg-gray-200">Profile</Link></li>
                    <li><Link to="settings" className="block px-4 py-1 hover:bg-gray-200">Settings</Link></li>
                    <li><Link to="/logout" className="block px-4 py-1 hover:bg-gray-200">Logout</Link></li>
                </ul>
            </div>
        </nav>
        <div className="w3-container">
        <h1>Tabs Layout Route</h1>
        <p>
          <Link to="/">Go back home</Link>
        </p>
      </div>
        <div className="container mx-auto px-4">
            <ul className="tabs flex border-b pb-1">
                <li className="tab w-1/3 text-center"><Link to="jobs" className="w-full py-2 font-bold">Jobs</Link></li>
                <li className="tab w-1/3 text-center"><Link to="saved" className="w-full py-2">Saved</Link></li>
                <li className="tab w-1/3 text-center"><Link to="alerts" className="w-full py-2">Alerts</Link></li>
            </ul>
        </div>
    </header>
    <main className="container mx-auto px-4 py-6 flex">
        <Outlet />
    </main>
        </>
	);

    /*
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.3/dist/tailwind.min.css" rel="stylesheet">
    <title>Job Posts</title>
    <style>
        .hidden {
            display: none !important;
        }
    </style>
</head>
<body class="overflow-hidden">
    <div class="container mx-auto p-4 h-full w-full my-4 px-2">
        <div class="flex justify-center items-center">
            <input id="search-bar" class="border-2 border-gray-300 bg-white h-10 w-full pl-2 rounded-l-full text-sm focus:outline-none" type="text" placeholder="Search">
            <button id="search-btn" class="bg-gray-400 text-white transition duration-150 ease-in-out hover:bg-blue-600 border-blue-600 h-10 w-10 flex items-center justify-center rounded-r-full font-semibold">
                <svg class="h-6 w-6 pr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
< path d = "M10 18C13.866 18 17 14.866 17 11C17 7.13401 13.866 4 10 4C6.13401 4 3 7.13401 3 11C3 14.866 6.13401 18 10 18Z" stroke = "currentColor" stroke - width = "2" strokeLinecap = "round" stroke - linejoin = "round" /> <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>


                </svg>
            </button>
        </div>
        <div id="job-posts" class="mt-6 space-y-4 overflow-y-scroll h-screen snap-proximity snap-y">
            <!-- Job cards will be generated here -->
        </div>
    </div>
    <script>
            const briefcaseIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block mr-1" viewBox="0 0 20 20" fill="currentColor"><path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v2h2a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V8a2 2 0 012-2h2V4z"></path></svg>`;
            const clockIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block mr-1" viewBox="0 0 20 20" fill="currentColor"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 110-12 6 6 0 010 12zM9 9a1 1 0 012 0V5a1 1 0 11-2 0v4zM7 12a1 1 0 110-2h4a1 1 0 110 2H7z"/></svg>`;
            const usdIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block fill-current stroke-black mr-1" viewBox="0 0 20 20"><path d="M10.5 0C6.313 0-.098 2.443 0 10.5c0 8.312 3.402 11.494 3.402 11.494 3.437 3.058 7.037-3.092 7.098-3.094.089-.003.289-.014.481-.02l.019-.005v-.777l-.018.008c.371-3.242.168-5.526-5.551-5.527-2.338 0-4.711.263-6.372-.735C1.291 9.731 2 7.057 2 7.057c1.17-5.529 4.898-6.611 8.5-7 0 .25 0 .5.038 1.485.724-1.26 1.963-2.541 3.233-1.851 1.761.963 3.011 3.967 1.729 8.327"/></svg>`;
            const bookmarkIcon = `<svg id="bookmark-icon-svg" class="h-8 w-8 inline-block mr-1 fill-current" width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
< path d = "M8 3H16C17.6569 3 19 4.34315 19 6V22L12 19L5 22V6C5 4.34315 6.34315 3 8 3Z" stroke = "#000" stroke - width = "1" strokeLinecap = "round" stroke - linejoin = "round" />


  </svg>`;
        
        const jobPosts = document.getElementById('job-posts');
        const searchBar = document.getElementById('search-bar');
        const searchBtn = document.getElementById('search-btn');
        
        
        
        function getDetails(index) {
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
            return {id, companyName, initialAvatar, jobTitle, location, updatedDate, salary, type, url};
        };
        
        //  <img id="avatar" src="${avatarSrc}" alt="avatar" class="rounded-full h-12 w-12 object-cover">

        function generateJobCard(index) {
            const details = getDetails(index);
            return `<div id="job-card  class="bg-white p-5 rounded-lg shadow-md flex flex-col space-y-3 border border-blue-400 snap-always snap-start job-card">
                    <div class="flex">
                        <div class="rounded-full h-12 w-12 object-cover bg-gray-300 ml-3 flex items-center justify-center text-sm">
                            <span>${details.initialAvatar}</span>
                        </div>
                        <div class="ml-3 flex-grow">
                            <h3 class="font-semibold">${details.jobTitle}</h3>
                            <p>${details.companyName}</p>
                        </div>
                        <div id="bookmark" class="inline-flex text-white hover:text-blue-400 transition duration-150 ease-in-out h-10 w-10 items-center justify-center font-semibold cursor-pointer">
                        ${bookmarkIcon}
                        <span id="title" class="sr-only">Bookmark</span>
                        <span id="bookmark-id" class="sr-only">${details.id}</span>
                        </div>
                    </div>
                    <p class="mt-2">${briefcaseIcon}${details.type}</p>
                    <p class="mt-2">${clockIcon}Last updated: ${details.updatedDate}</p>
                    <p class="mt-2">${usdIcon}Salary range: $${details.salary}</p>
                </div>`;
        };

        /* const bookmark = document.getElementById("bookmark");
        const bookmarkIconSvg = document.getElementById("bookmark-icon-svg");
        bookmark.addEventListener('click', () => {
          // bookmarkIconSvg.classList.remove("fill-current");
          bookmark.classList.toggle("fill-black");
        }) /

        function generateJobCards(numberOfCards) {
            let cards = '';
            for (let i = 1; i <= numberOfCards; i++) {
                cards += generateJobCard(i);
            }
            jobPosts.innerHTML = cards;
        }

        function filterJobCards(searchText) {
            const cards = document.getElementsByClassName('job-card');
            Array.from(cards).forEach((card) => {
                const cardText = card.innerText.toLowerCase();
                if (cardText.includes(searchText.toLowerCase())) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        }

        generateJobCards(25);

        searchBar.addEventListener('input', () => {
            filterJobCards(searchBar.value);
        });

  searchBtn.addEventListener('click', () => {
            filterJobCards(searchBar.value);
        });
    </script>
</body>
</html>
*/
}