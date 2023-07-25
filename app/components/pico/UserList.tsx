import React from 'react';





/*
        const jobPosts = document.getElementById('job-posts');
        const searchBar = document.getElementById('search-bar');
        const searchBtn = document.getElementById('search-btn');
        
        function getDetails(index) {
                const employmentTypes = ["Full-time", "Part-time", "Special Event", "Temp"];
                const id = `job-id-${index}`;
                const companyName = `company-${index}`;
                const initialAvatar = `${index}`;
                const jobTitle = `job-title-${index}`;
                const location = `job-location-${index}`;
                const updatedDate = new Date().toLocaleString();
                const salaryLow = Math.round(Math.random() * 15);
                const salaryHigh = Math.round(Math.random() * 65);
                const salary = `$ ${salaryLow}/hr - $ ${salaryHigh}/hr`;
                const type = employmentTypes[Math.ceil(Math.random() * employmentTypes.length - 1)];
                const url = `/jobs/${index}`;
            return {id, companyName, initialAvatar, jobTitle, location, updatedDate, salary, type, url};
        };
        
        function generateJobCard(index) {
            const details = getDetails(index);
            return `<div id="job-card" class="bg-white p-2 lg:p-5 rounded-lg shadow lg:shadow-md flex flex-col space-y-2 lg:space-y-3 border border-blue-400 snap-always snap-start job-card">
                    <div class="flex items-center justify-center">
                        <div class="rounded-full h-16 w-16 lg:h-24 lg:w-24 object-cover bg-gray-300 ml-2 lg:ml-3 flex items-center justify-center text-md lg:text-xl font-semibold">
                            <span>${details.initialAvatar}</span>
                        </div>
                        <div class="ml-12 flex-grow">
                            <h3 class="text-xl lg:text-3xl font-semibold">${details.jobTitle}</h3>
                            <p class="text-xl lg:text-2xl">${details.companyName}</p>
                        </div>
                        <div id="bookmark" class="inline-flex text-transparent hover:text-blue-400 transition duration-150 ease-in-out h-12 w-12 lg:h-16 lg:w-16 mb-12 items-center justify-center font-semibold cursor-pointer">
                        ${bookmarkIcon}
                        <span id="title" class="sr-only">${details.jobTitle}</span>
                        <span id="bookmark-id" class="sr-only">${details.id}</span>
                        </div>
                    </div>
                    <p class="mt-2 lg:mt-3 text-md lg:text-xl font-bold">${details.type}</p>
                    <p class="mt-2 lg:text-xl">Salary range: ${details.salary}</p>
                    <p class="mt-2 lg:text-md">${clockIcon}Last updated: ${details.updatedDate}</p>
                </div>`;
        };

        function generateJobCards(numberOfCards) {
            let cards = '';
            for (let i = 1; i <= numberOfCards; i++) {
                cards += generateJobCard(i);
            }
            jobPosts.innerHTML = cards;
            addBookmarkEventListener();
            initializeBookmarks();
        }

        function addBookmarkEventListener() {
            const bookmarks = document.querySelectorAll("#bookmark");
            bookmarks.forEach((bookmark) => {
                bookmark.addEventListener("click", () => {
                    const bookmarkIconSvg = bookmark.querySelector("#bookmark-icon-svg");
                    const title = bookmark.querySelector("#title").textContent;
                    const id = bookmark.querySelector("#bookmark-id").textContent;
                    updateBookmark(bookmarkIconSvg, title, id);
                });
            });
        }

        function updateBookmark(bookmarkIcon, title, id) {
            bookmarkIcon.classList.toggle("fill-current");
            bookmarkIcon.classList.toggle("stroke-current");
            bookmarkIcon.classList.toggle("text-blue-400");
            updateLocalStorage(title, id);
        }

        function updateLocalStorage(title, id) {
            let saved_jobs = JSON.parse(localStorage.getItem("saved_jobs")) || {};
            if (saved_jobs.hasOwnProperty(id)) {
                delete saved_jobs[id];
            } else {
                saved_jobs[id] = title;
            }
            localStorage.setItem("saved_jobs", JSON.stringify(saved_jobs));
        }

        function initializeBookmarks() {
            let saved_jobs = JSON.parse(localStorage.getItem("saved_jobs")) || {};
            Object.keys(saved_jobs).forEach((key) => {
                const bookmarkElement = document.querySelector(`[id='bookmark-id'][innerText="${key}"]`);
                if (bookmarkElement) {
                    const bookmarkIconElement = bookmarkElement.querySelector("#bookmark-icon-svg");
                    if (!bookmarkIconElement.classList.contains("fill-current")) {
                        bookmarkIconElement.classList.add("fill-current");
                        bookmarkIconElement.classList.toggle("text-blue-400");
                        bookmarkIconElement.classList.remove("stroke-current");
                    }
                }
            });
        }
*/

/*
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
*/


export function UsersList() {
    return (
        <>
    <div className="container overflow-hidden mx-auto p-4 h-full w-full my-4 px-2">
        <div className="flex justify-center items-center mb-4 lg:mb-12">
            <SearchBar />
            <SearchButton />
        </div>
        <UserCardList quantity={20} />
    </div>
        </>
    )
};

export function JobsList() {
    return (
        <>
    <div className="container overflow-hidden mx-auto p-4 h-full w-full my-4 px-2">
        <div className="flex justify-center items-center mb-4 lg:mb-12">
            <SearchBar />
            <SearchButton />
        </div>
        <JobPostList quantity={20} />
    </div>
        </>
    )
};

function ClockIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-1" viewBox="0 0 20 20" fill="currentColor"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 110-12 6 6 0 010 12zM9 9a1 1 0 012 0V5a1 1 0 11-2 0v4zM7 12a1 1 0 110-2h4a1 1 0 110 2H7z"/></svg>
    )
};

interface IBookmarkIconProps {

};
/*
const BookmarkIcon: React.FC<{}> = () => {
    return (
        <svg id="bookmark-icon-svg" className="h-12 w-12 lg:h-16 lg:w-16 inline-block mr-1 cursor-pointer" width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
< path d = "M8 3H16C17.6569 3 19 4.34315 19 6V22L12 19L5 22V6C5 4.34315 6.34315 3 8 3Z" stroke - width = "1" strokeLinecap = "round" stroke - linejoin = "round" />


  </svg>
    )
};
*/
// React.forwardRef<React.FC<{}>, React.ReactSVGElement>(BookmarkIcon)

const BookmarkIconWithRef = React.forwardRef<SVGSVGElement, {}>(function bookmarkIcon(props, ref) {
    // const { title, titleId } = props;
    return (
        <svg id="bookmark-icon-svg" ref={ref} className="h-12 w-12 lg:h-16 lg:w-16 inline-block mr-1 cursor-pointer" width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
< path d = "M8 3H16C17.6569 3 19 4.34315 19 6V22L12 19L5 22V6C5 4.34315 6.34315 3 8 3Z" stroke - width = "1" strokeLinecap = "round" stroke - linejoin = "round" />


      </svg>
    );
  });

  /*
React.forwardRef<SVGSVGElement, SVGRProps>((props, ref) => {
  const { title, titleId } = props;
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
      ref={ref}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path fill="#737373" d="M12.888 16.445H11.11v-6.222h1.778z" />
      <rect
        x={12.889}
        y={9.333}
        width={1.778}
        height={1.778}
        rx={0.889}
        transform="rotate(180 12.889 9.333)"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 5.778a6.222 6.222 0 100 12.444 6.222 6.222 0 000-12.444zM12 4a8 8 0 100 16 8 8 0 000-16z"
        fill="#737373"
      />
    </svg>
  );
});
  */
interface IJobPostListProps {
    quantity: number;
}
function JobPostList({quantity}: IJobPostListProps) {
    return (
        <>
        <div id="job-posts" className="grid grid-cols-1 lg:grid-cols-2 mt-6 space-y-4 lg:space-x-4 overflow-y-scroll h-screen snap-proximity snap-y">
            {/*<!-- Job cards will be generated here -->*/}
            {Array.from({length: quantity}).map((_, i) => (
                <JobPostCard key={`job-card-${i}`} index={i} />
            ))}
        </div>
        </>
    )
};

function UserCardList({quantity}: IJobPostListProps) {
    return (
        <>
        <div id="user-posts" className="grid grid-cols-1 lg:grid-cols-2 mt-6 space-y-4 lg:space-x-4 overflow-y-scroll h-screen snap-proximity snap-y">
            {/*<!-- User cards will be generated here -->*/}
            {Array.from({length: quantity}).map((_, i) => (
                <UserCard key={`user-card-${i}`} index={i} />
            ))}
        </div>
        </>
    )
};

function SearchBar() {
    return (
        <>
        <input id="search-bar" className="border-2 border-gray-300 bg-white h-10 w-full lg:w-2/3 pl-2 rounded-l-full text-sm focus:outline-none" type="text" placeholder="Search" />
        </>
    )
};

function SearchButton() {
    return (
        <>
        <button id="search-btn" className="bg-gray-400 text-white transition duration-150 ease-in-out hover:bg-blue-600 border-blue-600 h-10 w-10 flex items-center justify-center rounded-r-full font-semibold">
                <svg className="h-7 w-7 pr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
< path d = "M10 18C13.866 18 17 14.866 17 11C17 7.13401 13.866 4 10 4C6.13401 4 3 7.13401 3 11C3 14.866 6.13401 18 10 18Z" stroke = "currentColor" stroke - width = "2" strokeLinecap = "round" stroke - linejoin = "round" /> <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>


                </svg>
            </button>
        </>
    )
};

interface IJobDetails {
    id: string;
    companyName: string;
    initialAvatar: string;
    jobTitle: string;
    location: string;
    updatedDate: string;
    salary: string;
    type: string;
    url: string;
}
interface IJobPostCardProps {
    index: number;
}

function JobPostCard({index}: IJobPostCardProps) {
    const [details, setDetails] = React.useState<IJobDetails | null>(null);
    let bookmarkIconRef = React.useRef<SVGSVGElement>(null);
    // let bookmarkIcon = document.getElementById(`job-id-${index}`);

    function getDetails(index: number) {
        const employmentTypes = ["Full-time", "Part-time", "Special Event", "Temp"];
        const id = `job-id-${index}`;
        const companyName = `company-${index}`;
        const initialAvatar = `${index}`;
        const jobTitle = `job-title-${index}`;
        const location = `job-location-${index}`;
        const updatedDate = new Date().toLocaleString();
        const salaryLow = Math.round(Math.random() * 15);
        const salaryHigh = Math.round(Math.random() * 65);
        const salary = `$ ${salaryLow}/hr - $ ${salaryHigh}/hr`;
        const type = employmentTypes[Math.ceil(Math.random() * employmentTypes.length - 1)];
        const url = `/jobs/${index}`;
    return {id, companyName, initialAvatar, jobTitle, location, updatedDate, salary, type, url};
};

React.useEffect(() => {
    if (!details || details == null) {
        const JobDetails = getDetails(index);
        setDetails(JobDetails);
    }
}, [details, setDetails, index]);

const initializeBookmark = React.useCallback(() => {
    if (details && details.id) {
        let saved_job = localStorage.getItem(details.id);
        if (saved_job && bookmarkIconRef.current) {
            if (!bookmarkIconRef.current.classList.contains("fill-current")) {
                bookmarkIconRef.current.classList.add("fill-current");
                bookmarkIconRef.current.classList.toggle("text-blue-400");
                bookmarkIconRef.current.classList.remove("stroke-current");
            }
        }
    }
}, [details]);

React.useEffect(() => initializeBookmark(), [initializeBookmark]);

const updateLocalStorage = React.useCallback((title: string, id: string) => {
    let saved_job = localStorage.getItem(id); //JSON.parse(localStorage.getItem(title) ?? "");
        if (saved_job) {
            localStorage.removeItem(id);
            // delete saved_jobs[id];
        } else {
            localStorage.setItem(id, title);
            // saved_jobs[id] = title;
        }
        // localStorage.setItem("saved_jobs", JSON.stringify(saved_jobs));
}, []);

const updateBookmark = React.useCallback((title: string, id: string, index: number) => {
        
        if (bookmarkIconRef.current) {
            bookmarkIconRef.current.classList.toggle("fill-current");
            bookmarkIconRef.current.classList.toggle("stroke-current");
            bookmarkIconRef.current.classList.toggle("text-blue-400");
        };
    
        updateLocalStorage(title, id);
}, [updateLocalStorage]);




    if (!details || details == null) {
        return (
            <p>loading...</p>
        )
    };

    return (
        <>
        <div id="job-card" className="bg-white p-2 lg:p-5 rounded-lg shadow lg:shadow-md flex flex-col space-y-2 lg:space-y-3 border border-blue-400 snap-always snap-start job-card">
                    <div className="flex items-center justify-center">
                        <div className="rounded-full h-16 w-16 lg:h-24 lg:w-24 object-cover bg-gray-300 ml-2 lg:ml-3 flex items-center justify-center text-md lg:text-xl font-semibold">
                            <span>{details.initialAvatar}</span>
                        </div>
                        <div className="ml-12 flex-grow">
                            <h3 className="text-xl lg:text-3xl font-semibold">{details.jobTitle}</h3>
                            <p className="text-xl lg:text-2xl">{details.companyName}</p>
                        </div>
                        <div id="bookmark" onClick={() => updateBookmark(details.jobTitle, details.id, index)} className="inline-flex text-transparent hover:text-blue-400 transition duration-150 ease-in-out h-12 w-12 lg:h-16 lg:w-16 mb-12 items-center justify-center font-semibold cursor-pointer">
                        <BookmarkIconWithRef ref={bookmarkIconRef} />
                        <span id="title" className="sr-only">{details.jobTitle}</span>
                        <span id="bookmark-id" className="sr-only">{details.id}</span>
                        </div>
                    </div>
                    <p className="mt-2 lg:mt-3 text-md lg:text-xl font-bold">{details.type}</p>
                    <p className="mt-2 lg:text-xl">Salary range: {details.salary}</p>
                    <p className="mt-2 lg:text-md"><ClockIcon />Last updated: {details.updatedDate}</p>
                </div>
        </>
    )
};

interface IUserProps {
    index: number
};

/*
id: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    bio: string;
    image: string;
    */
interface IUserDemo {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
}
function UserCard({index}: IUserProps) {
    const [details, setDetails] = React.useState<IUserDemo | null>(null);
    let bookmarkIconRef = React.useRef<SVGSVGElement>(null);
    // let bookmarkIcon = document.getElementById(`job-id-${index}`);

    function getDetails(index: number) {
        // const employmentTypes = ["Full-time", "Part-time", "Special Event", "Temp"];
        const id = `user-id-${index}`;
        const firstName = `firstname-${index}`;
        const lastName = `lastname-${index}`;
        const email = `${index}@email.com`;
        const address = `${index}0${index} Fake St.`;
        const city = `Hoboken`;
        const state = `NJ`;
        const zipCode = `0${index}01${index}`;
        // const updatedDate = new Date().toLocaleString();
        // const salaryLow = Math.round(Math.random() * 15);
        // const salaryHigh = Math.round(Math.random() * 65);
        // const salary = `$ ${salaryLow}/hr - $ ${salaryHigh}/hr`;
        // const type = employmentTypes[Math.ceil(Math.random() * employmentTypes.length - 1)];
        // const url = `/users/${index}`;
    return {id, firstName, lastName, email, address, city, state, zipCode};
};

React.useEffect(() => {
    if (!details || details == null) {
        const UserDetails = getDetails(index);
        setDetails(UserDetails);
    }
}, [details, setDetails, index]);

const initializeBookmark = React.useCallback(() => {
    if (details && details.id) {
        let saved_job = localStorage.getItem(details.id);
        if (saved_job && bookmarkIconRef.current) {
            if (!bookmarkIconRef.current.classList.contains("fill-current")) {
                bookmarkIconRef.current.classList.add("fill-current");
                bookmarkIconRef.current.classList.toggle("text-blue-400");
                bookmarkIconRef.current.classList.remove("stroke-current");
            }
        }
    }
}, [details]);

React.useEffect(() => initializeBookmark(), [initializeBookmark]);

const updateLocalStorage = React.useCallback((title: string, id: string) => {
    let saved_job = localStorage.getItem(id); //JSON.parse(localStorage.getItem(title) ?? "");
        if (saved_job) {
            localStorage.removeItem(id);
            // delete saved_jobs[id];
        } else {
            localStorage.setItem(id, title);
            // saved_jobs[id] = title;
        }
        // localStorage.setItem("saved_jobs", JSON.stringify(saved_jobs));
}, []);

const updateBookmark = React.useCallback((title: string, id: string, index: number) => {
        
        if (bookmarkIconRef.current) {
            bookmarkIconRef.current.classList.toggle("fill-current");
            bookmarkIconRef.current.classList.toggle("stroke-current");
            bookmarkIconRef.current.classList.toggle("text-blue-400");
        };
    
        updateLocalStorage(title, id);
}, [updateLocalStorage]);




    if (!details || details == null) {
        return (
            <p>loading...</p>
        )
    };
    return (
        <>
        <div id="user-card" className="bg-white p-2 lg:p-5 rounded-lg shadow lg:shadow-md flex flex-col space-y-2 lg:space-y-3 border border-blue-400 snap-always snap-start user-card">
                    <div className="flex items-center justify-center">
                        <div className="rounded-full h-16 w-16 lg:h-24 lg:w-24 object-cover bg-gray-300 ml-2 lg:ml-3 flex items-center justify-center text-md lg:text-xl font-semibold">
                            <span>{index}</span>
                        </div>
                        <div className="ml-12 flex-grow">
                            <h3 className="text-xl lg:text-xl font-semibold">{details.firstName} {details.lastName}</h3>
                            <p className="text-md lg:text-lg">{details.email}</p>
                        </div>
                        <div id="bookmark" onClick={() => updateBookmark(details.email, details.id, index)} className="inline-flex text-transparent hover:text-blue-400 transition duration-150 ease-in-out h-12 w-12 lg:h-16 lg:w-16 mb-12 items-center justify-center font-semibold cursor-pointer">
                        <BookmarkIconWithRef ref={bookmarkIconRef} />
                        <span id="email" className="sr-only">{details.email}</span>
                        <span id="bookmark-id" className="sr-only">{details.id}</span>
                        </div>
                    </div>
                    <h3 className="text-md font-semibold mb-2 mt-2 lg:mt-3 lg:text-xl">Address</h3>
                        <p className="text-sm">{details.address}, {details.city}, {details.state}, {details.zipCode}</p>
                </div>
        </>
    )
}