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
<body>
    <div className="container mx-auto p-4 h-full w-full">
        <div className="flex justify-center items-center">
            <input id="search-bar" className="border-2 border-gray-300 bg-white h-10 w-full pl-2 rounded-l-full text-sm focus:outline-none" type="text" placeholder="Search">
            <button id="search-btn" className="bg-gray-400 text-white transition duration-150 ease-in-out hover:bg-blue-600 border-blue-600 h-10 w-10 flex items-center justify-center rounded-r-full font-semibold">
                <svg className="h-6 w-6 pr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
< path d = "M10 18C13.866 18 17 14.866 17 11C17 7.13401 13.866 4 10 4C6.13401 4 3 7.13401 3 11C3 14.866 6.13401 18 10 18Z" stroke = "currentColor" stroke - width = "2" strokeLinecap = "round" stroke - linejoin = "round" /> <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>


                </svg>
            </button>
        </div>
        <div id="job-posts" className="mt-6 space-y-4 overflow-y-scroll h-screen">
            <!-- Job cards will be generated here -->
        </div>
    </div>
    <script>
        
    </script>
</body>
</html>
*/

import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';

export default function ScrollableList() {
    const [jobCards, setJobCards] = React.useState<Array<string>>(['']);

    const jobPostsRef = React.useRef<HTMLDivElement>(null);
    const searchBarRef = React.useRef<HTMLInputElement>(null);
    const searchButtonRef = React.useRef<HTMLButtonElement>(null);

    // const jobPosts = document.getElementById('job-posts');
    // const searchBar = document.getElementById('search-bar');
    // const searchBtn = document.getElementById('search-btn');

    function generateJobCard(index: number) {
        return `<div className="job-card bg-white p-5 rounded-lg shadow-md flex flex-col space-y-3 border border-blue-400">
                <span className="font-bold text-xl">Business Name ${index}</span>
                <span>Location: New York, NY</span>
                <span>Position: Food Service</span>
                <span>Salary: $40,000 - $50,000</span>
                <span>Expiration Date: 2022-08-31</span>
                <span>Applicants: ${index * 10}</span>
            </div>`;
    };

    React.useEffect(() => {
        function generateJobCards(numberOfCards: number) {
            let cards = [];
            for (let i = 1; i <= numberOfCards; i++) {
                const card = generateJobCard(i);
                cards.push(card);
            };
            // if (jobPosts) jobPosts.innerHTML = cards;
            return cards
        };

        const cards = generateJobCards(25);
        setJobCards(cards);
    }, []);

    React.useEffect(() => {
        if (jobCards && jobCards.length > 0) {
            jobCards.forEach((card) => {
                if (jobPostsRef.current !== null) jobPostsRef.current.innerHTML += card;
            })
        } else {
            if (jobPostsRef.current !== null) jobPostsRef.current.innerHTML = 'loading...';
        };

    }, [jobCards, jobPostsRef]);

    useEffect(() => {
        function filterJobCards(searchText: string) {
            const filteredCards = jobCards.filter((card) => card.toLowerCase().includes(searchText.toLowerCase()));
            setJobCards(filteredCards);
        };

        const debouncedSearch = debounce(() => filterJobCards(searchBarRef.current?.value ?? ''), 500);

        if (searchBarRef.current && searchBarRef.current !== null) {
            searchBarRef.current.addEventListener('input', () => {
                return debouncedSearch();
            })
        };

        if (searchButtonRef.current && searchButtonRef.current !== null) {
            searchButtonRef.current.addEventListener('click', () => {
                filterJobCards(searchBarRef?.current?.value ?? '');
            });
        };
    }, [searchBarRef, searchButtonRef, jobCards]);

    return (
        <>
            <div className="container mx-auto p-4 h-full w-full">
                <div className="flex justify-center items-center">
                    <input id="search-bar" ref={searchBarRef} className="border-2 border-gray-300 bg-white h-10 w-full pl-2 rounded-l-full text-sm focus:outline-none" type="text" placeholder="Search" />
                    <button id="search-btn" ref={searchButtonRef} className="bg-gray-400 text-white transition duration-150 ease-in-out hover:bg-blue-600 border-blue-600 h-10 w-10 flex items-center justify-center rounded-r-full font-semibold">
                        <svg className="h-6 w-6 pr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 18C13.866 18 17 14.866 17 11C17 7.13401 13.866 4 10 4C6.13401 4 3 7.13401 3 11C3 14.866 6.13401 18 10 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                <div id="job-posts" ref={jobPostsRef} className="mt-6 space-y-4 overflow-y-scroll h-screen">
                    {/* <!-- Job cards will be generated here --> */}
                    {jobCards.length > 0 ? (
                        <>
                            {jobCards}
                        </>
                    ) : (
                        <>
                            <p>loading...</p>
                        </>
                    )}
                </div>
            </div>
        </>
    )
};

interface IJobCardProps {
    index: number
};

export function JobCard(props: IJobCardProps) {
    return (
        <div className="job-card bg-white p-5 rounded-lg shadow-md flex flex-col space-y-3 border border-blue-400">
            <span className="font-bold text-xl">Business Name {props.index}</span>
            <span>Location: New York, NY</span>
            <span>Position: Food Service</span>
            <span>Salary: $40,000 - $50,000</span>
            <span>Expiration Date: 2022-08-31</span>
            <span>Applicants: {props.index * 10}</span>
        </div>
    );
};

const JobCardWithRef = React.forwardRef<HTMLDivElement, IJobCardProps>(JobCard);

export function JobCardList(quantity: number) {
    const [cards, setCards] = useState([<></>]);
    const cardRef = React.useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (cardRef.current) cardRef.current.scrollIntoView({ behavior: 'smooth' });
    });

    for (let i = 1; i <= quantity; i++) {
        if (i === 1) {
            setCards([<li key={`job-card-${i}`}><JobCardWithRef ref={cardRef} index={i} /></li>]);
        } else {
            setCards((cards) => [...cards, <li key={`job-card-${i}`}><JobCardWithRef ref={cardRef} index={i} /></li>]);
        };

        return (
            <>
                <ul>{cards}</ul>

            </>
        );
    };


}