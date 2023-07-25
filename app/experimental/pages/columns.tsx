/*
<style> select {
 border-radius: 4px;
 border: 2px solid rgb(201, 207, 212);
 padding: 8px;
 height: 54px;
 } 
 input {
 border-radius: 4px;
 border: 2px solid rgb(201, 207, 212);
 } 
 div.filter-container {
 background: #fff;
 border-radius: 2px; 
 padding: 10px; 
 display: flex; 
 flex-direction: column; 
 gap: 24px;
 height: calc(100vh - 120px);
 } 
 label {
 text-transform: capitalize;
 } 
 #job-types {
 display: flex; 
 flex-direction: row; 
 gap: 12px;
 flex-wrap: wrap; 
 } </style>


 div id="style-holder-2"
 <style>
 .content-area {
 margin - top : 0;
 }
 .loading {
 min - height : 96 px;
 position : relative;
 background - color : rgba( 212, 212, 212, 0.1 );
 }
 .loading:before {
 font - family : Ionicons !important;
 animation : rotate 1 s infinite linear;
 content : "";
 font - size : 30 px;
 position : absolute;
 top : 30 %;
 left : 50 %;
 margin - top : -16 px;
 width : 26 px;
 height : 32 px;
 display : inline - block;
 speak : none;
 font - style : normal;
 font - weight : 400;
 font - variant : normal;
 text - transform : none;
 text - rendering : auto;
 line - height : normal;
 -webkit - font - smoothing : antialiased;
 -moz - osx - font - smoothing : grayscale;
 width : auto;
 height : auto;
 margin : 0;
 vertical - align : initial;
 }
 .job-item {
 display : flex;
 flex - direction : row;
 height : 200 px;
 padding : 8 px;
 border - bottom : 1 px solid #f6f5f5;
 box - sizing : border - box;
 }
 .job-item:hover {
 background : #f6f5f5;
 border - left : 2 px solid #000;
 }
 .job-logo img {
 height : 100 %;
 }
 .job-logo {
 height : 100 %;
 padding : 6 px;
 min - height : 40 px;
 min - width : 184 px;
 }
 .job-item-content {
 padding : 5 px;
 }
 .job-title {
 font - size : 24 px;
 display : flex;
 flex - flow : row nowrap;
 justify - content : flex - start;
 align - items : baseline;
 flex - shrink : 0;
 }
 .tag {
 width : fit - content;
 background : rgb( 230, 232, 235 );
 border - radius : 4 px;
 padding - left : 8 px;
 padding - right : 8 px;
 } </style>

 "https://www.maps.ie/distance-area-calculator.html"
 "https://spojiti.com/resume/paul-richards/"
 "https://spojiti.com/resume/jim-ybrzs3arqy-bar-manager-san-francisco-ca-94110/"
 "https://spojiti.com/resume/jen-irz4ah-busboy-hoboken-new-jersey/"
 "https://spojiti.com/resume/michael-tegqb2lixl-waiter-server-bartender-phoenix-arizona-85392/"
*/
import React from 'react';
import { Link, useSearchParams } from '@remix-run/react';
import { } from '@remix-run/node';
import type {  } from '@remix-run/node';
import { generateUserCard, type IUserCardProps } from '~/experimental/pages/page.data';
import SocialShareButtons from '~/components/common/SocialShareButtons'
type JobOrUserType = "job" | "user";



/*
type: 'job' | 'user';
 // "job-item-content"

location: string;
'Sacramento, California'
"Chicago 60131"


 linkToHref: string;
 "https://spojiti.com/resume/jen-irz4ah-busboy-hoboken-new-jersey/"
 "https://spojiti.com/resume/jim-ybrzs3arqy-bar-manager-san-francisco-ca-94110/"
 "https://spojiti.com/resume/paul-richards/"
 
 id: string;

 title: string;
 "michael wenzler"
 "Jen Sacamento"
" Jim James"
" Paul Richards"
"Jennifer Smith"

 imageHref: string;
 "https://spojiti.com/wp-content/uploads/job-manager-uploads/candidate_photo/2023/05/Screenshot-2023-02-22-at-3.22.25-PM.png" data-src="https://spojiti.com/wp-content/uploads/job-manager-uploads/candidate_photo/2023/05/Screenshot-2023-02-22-at-3.22.25-PM.png"
 "https://spojiti.com/wp-content/uploads/job-manager-uploads/candidate_photo/2023/05/Screenshot-2023-02-22-at-3.21.42-PM.png" data-src="https://spojiti.com/wp-content/uploads/job-manager-uploads/candidate_photo/2023/05/Screenshot-2023-02-22-at-3.21.42-PM.png"
"https://spojiti.com/wp-content/uploads/2023/01/resume-4-1.jpg"
"https://spojiti.com/wp-content/uploads/2023/01/resume-2-1.jpg"
"https://spojiti.com/wp-content/uploads/2023/01/resume-1-1.jpg"

 imageAlt?: string;
 // imgProps?: React.ImgHTMLAttributes<HTMLImageElement>;

 description: string;
 "Waiter, Server, Bartender"
 "Busboy"
"Bar Manager"
"Professional Copyrighter"
"UX/UI Graphic Designer"


tags?: string[]
<div> description </div>
 <div> location </div>
 <div className="flex flex-row gap-1 flex-wrap">
 After Effects
 HTML/CSS
 illustrator
 inDesign
 Sketch
 Sword Wielding
 </div>


 */
interface IColumnsProps {
    
}

 export default function ColumnsRoute() {
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryFilterRef = React.createRef<HTMLSelectElement>();
    React.useEffect(() => {
        const selectedCategory = searchParams.get('category');
        if (categoryFilterRef && categoryFilterRef.current && typeof categoryFilterRef.current.value === 'string') {
            if (!selectedCategory || selectedCategory !== categoryFilterRef.current.value) {
                setSearchParams([['category', categoryFilterRef.current.value]]);
            }
            
        }
    }, [searchParams, setSearchParams, categoryFilterRef]);

    return (
        <>
            <section id="search-column-section" className="grid grid-cols-3 grid-rows-1 gap-0 container rounded-md border border-sp-primary/60 hyphens-none min-h-screen mx-0 my-0 px-0 py-0 leading-6 text-neutral-800 dark:text-neutral-100">
                <div id="filter-container" className="flex flex-col justify-start items-start p-2 max-w-fit flex-shrink bg-white border-r border-r-sp-primary/60 transition-all">
                    <span className="text-2xl font-medium mb-2 self-center">Filters</span>
                    <div id="filter-container" className="flex flex-col flex-wrap content-start justify-around items-start h-full overflow-y-scroll p-2 leading-6 bg-white rounded-sm text-neutral-500">
                        <div className="grid grid-cols-2 grid-rows-1 gap-1 mb-4 leading-6 text-neutral-500">
                            <label htmlFor="categories" className="self-center">
                                <span className="font-semibold text-lg">Job Categories:</span>
                            </label>
                            <span id="categories" className="">
                                <select ref={categoryFilterRef} id="categories">
                                    <option value="">None</option>
                                    <option value="97">Banquet Staff</option>
                                    <option value="96">Bar Staff</option>
                                    <option value="98">Catering</option>
                                    <option value="94">Kitchen Staff</option>
                                    <option value="91">Management</option>
                                    <option value="95">Restaurant Staff</option>
                                </select>
                            </span>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-1 gap-1 mb-4 leading-6 text-neutral-500">
                        <label htmlFor="job-title" className="self-center">
                                <span className="font-semibold text-lg">Job Title:</span>
                            </label>
                            <input id="job-title" placeholder="Select Job Position" />
                        </div>
                        <div className="grid grid-cols-2 grid-rows-1 gap-1 mb-4 leading-6 text-neutral-500">
                        <label htmlFor="job-types" className="self-center">
                                <span className="font-semibold text-lg">Job Types:</span>
                            </label>
                            <div id="job-types" className="flex flex-row flex-wrap justify-around">
                                <span>
                                <input name="full-time" type="checkbox" value="full-time" />
                                <label htmlFor="full-time" className="mx-2">full-time</label>
                                </span>
                                <span>
                                <input name="part-time" type="checkbox" value="part-time" />
                                <label htmlFor="part-time" className="mx-2">part-time</label>
                                </span>
                                <span>
                                <input name="remote" type="checkbox" value="remote" />
                                <label htmlFor="remote" className="mx-2">remote</label>
                                </span>
                                <span>
                                <input name="temporary" type="checkbox" value="temporary" />
                                <label htmlFor="temporary" className="mx-2">temporary</label>
                                </span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-1 gap-1 mb-4 leading-6 text-neutral-500">
                        <label htmlFor="job-regions" className="self-center">
                                <span className="font-semibold text-lg">Zip Code / City:</span>
                            </label>
                            <input id="job-regions" placeholder="Select Location" /></div>
                        <div className="grid grid-cols-2 grid-rows-1 gap-1 mb-4 leading-6 text-neutral-500">
                        <label htmlFor="date" className="self-center">
                                <span className="font-semibold text-lg">Date Posted:</span>
                            </label>
                            <input id="date" placeholder="Select location" type="date" /></div>
                        <div className="grid grid-cols-2 grid-rows-1 gap-1 mb-4 leading-6 text-neutral-500">
                            <div className="flex flex-row gap-2 self-center">
                                <label htmlFor="salary">
                                <span className="font-semibold text-lg">Salary:</span>
                            </label>
                                <b id="salary">$0+ Placeholder</b>
                            </div>
                            <input id="salary" type="range" min="0" max="100" step="10" onInput={() => {/*document.getElementById('salary')?.value=event.target.valueloca*/ }} /></div>
                    </div>
                </div>
                <div className="flex flex-col flex-grow justify-stretch items-start p-2 w-full bg-white text-neutral-800 transition-all" data-id="04dbacc" data-element_type="column">
                    <div id="user-list" className="flex relative flex-nowrap flex-grow order-none self-auto w-full m-0 content-start p-2 min-w-full">
                        <div id="user-list-cards" className="w-full space-y-2">
                            {Array.from({ length: 3 }).map((_, i) => {
                                return (
                                    <div key={`user-card-${i}`} className="w-full border-b border-solid cursor-pointer border-sp-primary/30 rounded-md hover:border-2 hover:border-sp-primary hover:shadow-md">
                                        <UserCard />
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
                <div className="flex flex-col relative justify-stretch items-start flex-shrink p-2 w-full leading-6 bg-white border-l border-l-sp-primary/60 text-neutral-500 hyphens-none transition-all" data-id="cd21afd" data-element_type="column">
                    <div className="flex relative flex-wrap content-start p-2 w-full leading-6">
                        <div className="flex relative flex-wrap content-start p-2 w-full leading-6 text-neutral-500">
                            <div className="w-full h-full leading-6 " id="maps">
                                <iframe title={(Math.random() * 9999).toString()} className="m-0 w-full max-w-full leading-none" width="100%" height="600" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} data-src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                                    <Link to="https://www.maps.ie/distance-area-calculator.html">measure acres/hectares on map</Link>
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
};

interface ICardProps {
    type: 'job' | 'user';
    // "job-item-content"

    linkToHref: string;

    id: string;
    // "job-1797-logo"

    title: string;
    // michael wenzler

    logoHref: string;
    // "https://spojiti.com/wp-content/uploads/job-manager-uploads/candidate_photo/2023/05/Screenshot-2023-02-22-at-3.22.25-PM.png" data-src="https://spojiti.com/wp-content/uploads/job-manager-uploads/candidate_photo/2023/05/Screenshot-2023-02-22-at-3.22.25-PM.png"

    logoAlt?: string;
    // imgProps?: React.ImgHTMLAttributes<HTMLImageElement>;

    description?: string;
    // Waiter, Server, Bartender
}
// max-w-full h-full leading-6 align-middle rounded-none cursor-pointer text-neutral-700

function UserCard() {
    const { id, name, avatar, positions, skills } = generateUserCard();
    return (
        <>
            <div id={`user-${id}`} className="leading-6 transition-all">
                <div className="flex flex-col cursor-pointer text-zinc-800 hover:text-neutral-700 underline-none shadow-none">
                    <div id={`user-${id}-item`} className="flex flex-row p-2 h-48" onMouseOver={() => {/*"getGoogleMapSrc('')"*/ }}>
                        <div id={`avatar-${id}`} className="p-1">
                            <img alt={`${name}-avatar`} decoding="async" src={avatar} className="w-10 h-10 lg:w-36 lg:h-36 align-middle rounded-full overflow-hidden cursor-pointer text-neutral-700" />
                            <noscript>
                                <img alt={`${name}-avatar`} decoding="async" src={avatar} className="w-10 h-10 lg:w-36 lg:h-36 align-middle rounded-full overflow-hidden cursor-pointer text-neutral-700" /></noscript>
                        </div>
                        <div id={`user-item-content`} className="flex-grow min-w-2/3">
                            <div id={`user-name`} className="font-bold text-lg">
                                {name}
                            </div>
                            <div className="flex flex-row mb-2 flex-wrap gap-y-1 cursor-pointer text-neutral-700 dark:text-neutral-100">
                                {positions.map((pos, i) => (
                                    <p key={`${pos}-${i}`} className="inline-flex text-sm leading-4 font-medium hover:font-bold rounded-xl px-2 py-1 mx-1 bg-sp-primary/60 hover:bg-sp-primary hover:dark:text-neutral-700 hover:text-neutral-100">
                                        {pos}
                                    </p>
                                ))}
                            </div>
                            <div></div>
                            <div className="flex flex-row gap-1 flex-wrap">
                                <p className="block text-sm font-medium text-gray-900 dark:text-white">Skills:</p>
                                <ul className="max-w-fit list-disc list-inside">
                                    {skills.map((skill, i) => (
                                        <li key={`${skill}-${i}`} className="text-sm font-light cursor-pointer text-neutral-700 dark:text-neutral-100">
                                            <span>{skill}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="flex items-end justify-start w-8 h-auto ">
                            {<ActionButton text="Read More" link={`/${id}`} />}
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
};

interface IActionButtonProps {
    text: string;
    link?: string;
}

function ActionButton({ text, link }: IActionButtonProps) {
    return (
        <div className="shadow-sm hover:shadow-md opacity-100 translate-y-0 hover:scale-110 transition-all duration-150">
            <Link to={`/${link ?? ''}`} className="border-transparent mt-2 bg-sp-primary !text-white hover:bg-sp-primary-dark px-4 py-2 text-sm !no-underline rounded-md inline-flex items-center justify-center border font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 h-9.5">
                {text}
                <span className="mr-2 bg-transparent rounded-full">
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg></span>

            </Link>
        </div>
    );
}
