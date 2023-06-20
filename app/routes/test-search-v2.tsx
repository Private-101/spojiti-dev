// import Header from '../components/Header';
// import Sidebar from '../components/Sidebar';
import { Outlet, Link } from '@remix-run/react';
import WebsiteNavbar from '~/components/tailwind-components/WebsiteNavbar';
import { Fragment, useState, useEffect } from 'react';
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { redirect, json } from "@remix-run/node";
import { Listbox, Transition, Dialog } from "@headlessui/react";
import { Form, useFetcher, useSearchParams, useLoaderData } from "@remix-run/react";
// import { useInfiniteScroll } from 'react-infinite-scroll-hook';

import { CheckIcon } from '@heroicons/react/24/solid';
import { ApplyButtonModal } from '~/components/headlessui/ApplyDialog';

import type { JobPost } from '~/models/job.server';
import type { Category } from "~/models/category.server";
import { getAllCategories } from '~/models/category.server';

interface SearchIndexLoaderData {
  categories: Category[]
};

export const loader = async () => {
  const categories = await getAllCategories();

  return json<SearchIndexLoaderData>({ categories });
};

export default function TestSearchPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { categories } = useLoaderData<SearchIndexLoaderData>();
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [searchParams, setSearchParams] = useSearchParams();

  // Set up a fetcher to fetch jobs as the user types
  const jobs = useFetcher<JobPost[]>();

  useEffect(() => {
    setSearchParams([['category', selectedCategory.id]]);
    // When the input changes, load the jobs for that category
    jobs.load(`/search/categories?category=${selectedCategory.id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);
  // selectedCategory, setSearchParams, jobs

  // const handleCategoryChange = (data) => {
  // setSearchParams([['category', data.id]])
  // }




  // Listbox is just an <input/> in the end, so we can read the submitted
  // value from the searchParams when we submit the form (because it's a "get"
  // form instead of "post", it will be in the URL as a search param).


  // const [page, setPage] = useState(1);
  // const [data, setData] = useState([]);
  /*
  const infiniteRef = useInfiniteScroll({
    loading: jobs.state === 'loading',
    hasNextPage: true,
    onLoadMore: () => {
      setPage(page + 1);
    },
  });
  */

  /*
  const loadMoreData = async (query, page) => {
    const newData = await langs.load(`/lang-search?q=${query}&page=${page}`);
    setData([...data, ...newData]);
  };
  */

  return (
    <>
      {/* <!-- ===== Page Wrapper Start ===== --> */}

      {/* <!-- ===== Navbar Start ===== --> */}
      <header>
        <WebsiteNavbar />
      </header>
      {/* <!-- ===== Navbar End ===== --> */}


      {/* <!-- section hero --> border-b-2 cursor-pointer text-center text-sm bg-white py-2*/}
      <section>
        <div className="bg-gray-100 sm:grid grid-cols-4 grid-rows-2 px-4 py-6 min-h-full lg:min-h-screen space-y-6 sm:space-y-0 sm:gap-4">

          <div className="h-full col-span-1">
            <div className="bg-white py-3 px-4 rounded-lg flex justify-around items-center ">
              <input type="text" placeholder="seach" className=" bg-gray-100 rounded-md  outline-none pl-2 ring-indigo-700 w-full mr-2 p-2" />
              <span><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor ">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg></span>
            </div>
            <div className="bg-white w-full rounded-md">

              <h1 className="text-center text-md bg-white py-2 rounded-md text-gray-600">Categories:</h1>
              <div className="bg-white border-t-2 rounded-md list-none text-center">
                <Form>
                  <Listbox value={selectedCategory} by='id' onChange={setSelectedCategory}>
                    <Listbox.Button>{selectedCategory.title}</Listbox.Button>
                    <div className="bg-white border-t-2 rounded-md list-none text-center">
                      <Listbox.Options id="categories">
                        {categories.map((cat) => (
                          /* Use the `active` state to conditionally style the active option. */
                          /* Use the `selected` state to conditionally style the selected option. */
                          <Listbox.Option
                            key={cat.id}
                            value={cat}
                            as={Fragment}
                          // disabled={cat.jobs.length < 1}
                          >
                            {({ active, selected }) => (
                              <li
                                className={`p-2 m-6 cursor-pointer text-black ${active ? 'font-bold border-2 border-black' : ''
                                  }`}
                              >
                                {selected && (
                                  <span>
                                    <CheckIcon width={12} height={12} />
                                  </span>
                                )}
                                {cat.title}
                              </li>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </div>
                  </Listbox>

                </Form>

              </div>
            </div>
          </div>
          {jobs.state === "loading" ? <Spinner /> : null}
          {/* grid col-span-1 justify-between */}
          {jobs && jobs.data && jobs.data?.length > 0 ? (
            <>
             
              {jobs.data.map((job, i) => (

                <div key={i} className='m-1 md:h-screen transform transition-transform duration-500 ease-in-out hover:scale-110'>
                  <JobCard title={job.title} description={job.description} id={job.id} />
                  <JobSearchCard title={job.title} description={job.description} id={job.id} is_full_time={job.is_full_time} salary_range_min={job.salary_range_min} salary_range_max={job.salary_range_max} />
                </div>

              ))}

            </>
          ) : null}

        </div>
      </section>
      {/* <!-- ===== Page Wrapper End ===== --> */}

    </>
  );
};

/*
import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  let [categories] = useState({
    Recent: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  })

  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-gray-100"
                  >
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>

                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      <li>{post.date}</li>
                      <li>&middot;</li>
                      <li>{post.commentCount} comments</li>
                      <li>&middot;</li>
                      <li>{post.shareCount} shares</li>
                    </ul>

                    <a
                      href="#"
                      className={classNames(
                        'absolute inset-0 rounded-md',
                        'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
*/

function JobSearchCard({ title, description, id, is_full_time, salary_range_min, salary_range_max }: Partial<JobPost>) {
  // const startDate = start_date ? start_date.toJSON() : null;
  return (
    <>
      <div className="relative mx-auto w-full max-w-sm pt-6">
        <div className="relative inline-block w-full transform transition-transform duration-300 ease-in-out">
          <div className="rounded-lg">
          <div className="m-2 p-2 col-span-2 text-center justify-center bg-gradient-to-tr from-sp-primary to-orange-300 rounded-md flex items-center">
          <ApplyButtonModal />
            {/*<p className='uppercase inline-block mt-8 text-lg bg-transparent hover:bg-white/20 text-white py-2 px-4 rounded font-semibold'>Apply</p>*/}
        {is_full_time && <span className="absolute right-0 top-0 z-10 ml-3 mt-3 inline-flex select-none rounded-lg bg-red-500 px-3 py-2 text-sm font-medium text-white"> Full-Time </span>}
        {/*<a href={`/app/jobs/${id}`} className="uppercase inline-block mt-8 text-lg bg-white py-2 px-4 rounded font-semibold hover:bg-indigo-100">apply</a>*/}
        </div>
        {/*<div className="mt-4 grid grid-cols-2">*/}
        
                
          {/*<div className="flex items-center min-h-fit">
        
        <h2 className="line-clamp-1 text-base font-medium text-gray-800 md:text-lg" title={title}>{title}</h2>
                    <p className="mt-2 line-clamp-1 text-sm text-gray-800" title={description}>{description}</p>
                  
                </div>*/}
        {/*</div>*/}
        
      
            
            <div className="transform transition-transform duration-500 ease-in-out hover:scale-110">
              {/*<div className="">
                

                <div className="flex items-center justify-end">
                  <p className="text-primary inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                    {/*start_date && 
              <span className="text-lg">{startDate}</span>/}
                  </p>
                </div>
              </div>*/}

              <div className="mt-2 border-t border-gray-200 pt-3">{title}</div>

              <div className="mt-2 grid grid-cols-2 grid-rows-2 gap-4 border-b border-t border-gray-200 pb-3 pt-3">
                <p className="flex items-center text-gray-800 xl:flex-row xl:items-center">
                  <span className="xl:mt-0"> Minimum Salary </span>
                </p>
                <p className="flex items-center text-gray-800 xl:flex-row xl:items-center">
                  <span className="mt-0">Maximum Salary</span>
                </p>
                <p className="flex items-center text-gray-800 xl:flex-row xl:items-center">
                  <svg className="mr-3 inline-block h-5 w-5 fill-current text-gray-800 xl:h-4 xl:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M399.959 170.585c-4.686 4.686-4.686 12.284 0 16.971L451.887 239H60.113l51.928-51.444c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0l-84.485 84c-4.686 4.686-4.686 12.284 0 16.971l84.485 84c4.686 4.686 12.284 4.686 16.97 0l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273h391.773l-51.928 51.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l84.485-84c4.687-4.686 4.687-12.284 0-16.971l-84.485-84c-4.686-4.686-12.284-4.686-16.97 0l-7.07 7.071z"></path></svg>
                  <span className="mt-0"><span className='text-sm uppercase'>$</span>{!!salary_range_min && salary_range_min / 100}</span>
                </p>
                <p className="flex items-center text-gray-800 xl:flex-row xl:items-center">
                  <svg className="mr-3 inline-block h-5 w-5 fill-current text-gray-800 xl:h-4 xl:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M532.01 386.17C559.48 359.05 576 325.04 576 288c0-80.02-76.45-146.13-176.18-157.94 0 .01.01.02.01.03C368.37 72.47 294.34 32 208 32 93.12 32 0 103.63 0 192c0 37.04 16.52 71.05 43.99 98.17-15.3 30.74-37.34 54.53-37.7 54.89-6.31 6.69-8.05 16.53-4.42 24.99A23.085 23.085 0 0 0 23.06 384c53.54 0 96.67-20.24 125.17-38.78 9.08 2.09 18.45 3.68 28 4.82C207.74 407.59 281.73 448 368 448c20.79 0 40.83-2.41 59.77-6.78C456.27 459.76 499.4 480 552.94 480c9.22 0 17.55-5.5 21.18-13.96 3.64-8.46 1.89-18.3-4.42-24.99-.35-.36-22.39-24.14-37.69-54.88zm-376.59-72.13l-13.24-3.05-11.39 7.41c-20.07 13.06-50.49 28.25-87.68 32.47 8.77-11.3 20.17-27.61 29.54-46.44l10.32-20.75-16.49-16.28C50.75 251.87 32 226.19 32 192c0-70.58 78.95-128 176-128s176 57.42 176 128-78.95 128-176 128c-17.73 0-35.42-2.01-52.58-5.96zm289.8 100.35l-11.39-7.41-13.24 3.05A234.318 234.318 0 0 1 368 416c-65.14 0-122-25.94-152.43-64.29C326.91 348.62 416 278.4 416 192c0-9.45-1.27-18.66-3.32-27.66C488.12 178.78 544 228.67 544 288c0 34.19-18.75 59.87-34.47 75.39l-16.49 16.28 10.32 20.75c9.38 18.86 20.81 35.19 29.53 46.44-37.19-4.22-67.6-19.41-87.67-32.47zM233.38 182.91l-41.56-12.47c-4.22-1.27-7.19-5.62-7.19-10.58 0-6.03 4.34-10.94 9.66-10.94h25.94c3.9 0 7.65 1.08 10.96 3.1 3.17 1.93 7.31 1.15 10-1.4l11.44-10.87c3.53-3.36 3.38-9.22-.54-12.11-8.18-6.03-17.97-9.58-28.08-10.32V104c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v13.4c-21.85 1.29-39.38 19.62-39.38 42.46 0 18.98 12.34 35.94 30 41.23l41.56 12.47c4.22 1.27 7.19 5.62 7.19 10.58 0 6.03-4.34 10.94-9.66 10.94h-25.94c-3.9 0-7.65-1.08-10.96-3.1-3.17-1.94-7.31-1.15-10 1.4l-11.44 10.87c-3.53 3.36-3.38 9.22.54 12.11 8.18 6.03 17.97 9.58 28.08 10.32V280c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-13.4c21.85-1.29 39.38-19.62 39.38-42.46 0-18.98-12.35-35.94-30-41.23z"></path></svg>
                  <span className="mt-0"><span className='text-sm uppercase'>$</span>{!!salary_range_max && salary_range_max / 100}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};





/*
function JobSearchCard({ title, description, id, is_full_time, salary_range_min, salary_range_max }: Partial<JobPost>) {
  // const startDate = start_date ? start_date.toJSON() : null;
  return (
    <>
      <div className="relative mx-auto w-full max-w-sm pt-6">
        <a href={`/app/jobs/${id}`} className="relative inline-block w-full transform transition-transform duration-300 ease-in-out">
          <div className="rounded-lg">
          <div className="m-2 p-2 col-span-2 bg-gradient-to-tr from-sp-primary to-orange-300 rounded-md flex items-center">
        {is_full_time && <span className="absolute right-0 top-0 z-10 ml-3 mt-3 inline-flex select-none rounded-lg bg-red-500 px-3 py-2 text-sm font-medium text-white"> Full-Time </span>}
        <div className="ml-20 w-80">
          <h2 className="text-white font-bold text-2xl sm:text-4xl">{title}</h2>
          <p className="text-white mt-4 capitalize font-normal tracking-wider leading-7">{description}</p>

          <a href={`/app/jobs/${id}`} className="uppercase inline-block mt-8 text-sm bg-white py-2 px-4 rounded font-semibold hover:bg-indigo-100">apply</a>
        </div>

      </div>
            
            <div className="transform transition-transform duration-500 ease-in-out hover:scale-110">
              <div className="mt-4 grid grid-cols-2">
                <div className="flex items-center">
                  <div className="relative">
                    <h2 className="line-clamp-1 text-base font-medium text-gray-800 md:text-lg" title={title}>{title}</h2>
                    <p className="mt-2 line-clamp-1 text-sm text-gray-800" title={description}>{description}</p>
                  </div>
                </div>

                <div className="flex items-center justify-end">
                  <p className="text-primary inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                    {/*start_date && 
              <span className="text-lg">{startDate}</span>}
              </p>
              </div>
            </div>

            <div className="mt-2 border-t border-gray-200 pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed laboriosam labore obcaecati hic fugit exercitationem ad blanditiis inventore excepturi cumque!</div>

            <div className="mt-2 grid grid-cols-2 grid-rows-2 gap-4 border-b border-t border-gray-200 pb-3 pt-3">
              <p className="flex items-center text-gray-800 xl:flex-row xl:items-center">
                <span className="xl:mt-0"> Minimum Salary </span>
              </p>
              <p className="flex items-center text-gray-800 xl:flex-row xl:items-center">
                <span className="mt-0">Maximum Salary</span>
              </p>
              <p className="flex items-center text-gray-800 xl:flex-row xl:items-center">
                <svg className="mr-3 inline-block h-5 w-5 fill-current text-gray-800 xl:h-4 xl:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M399.959 170.585c-4.686 4.686-4.686 12.284 0 16.971L451.887 239H60.113l51.928-51.444c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0l-84.485 84c-4.686 4.686-4.686 12.284 0 16.971l84.485 84c4.686 4.686 12.284 4.686 16.97 0l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273h391.773l-51.928 51.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l84.485-84c4.687-4.686 4.687-12.284 0-16.971l-84.485-84c-4.686-4.686-12.284-4.686-16.97 0l-7.07 7.071z"></path></svg>
                <span className="mt-0"><span className='text-sm uppercase'>$</span>{!!salary_range_min && salary_range_min / 100}</span>
              </p>
              <p className="flex items-center text-gray-800 xl:flex-row xl:items-center">
                <svg className="mr-3 inline-block h-5 w-5 fill-current text-gray-800 xl:h-4 xl:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M532.01 386.17C559.48 359.05 576 325.04 576 288c0-80.02-76.45-146.13-176.18-157.94 0 .01.01.02.01.03C368.37 72.47 294.34 32 208 32 93.12 32 0 103.63 0 192c0 37.04 16.52 71.05 43.99 98.17-15.3 30.74-37.34 54.53-37.7 54.89-6.31 6.69-8.05 16.53-4.42 24.99A23.085 23.085 0 0 0 23.06 384c53.54 0 96.67-20.24 125.17-38.78 9.08 2.09 18.45 3.68 28 4.82C207.74 407.59 281.73 448 368 448c20.79 0 40.83-2.41 59.77-6.78C456.27 459.76 499.4 480 552.94 480c9.22 0 17.55-5.5 21.18-13.96 3.64-8.46 1.89-18.3-4.42-24.99-.35-.36-22.39-24.14-37.69-54.88zm-376.59-72.13l-13.24-3.05-11.39 7.41c-20.07 13.06-50.49 28.25-87.68 32.47 8.77-11.3 20.17-27.61 29.54-46.44l10.32-20.75-16.49-16.28C50.75 251.87 32 226.19 32 192c0-70.58 78.95-128 176-128s176 57.42 176 128-78.95 128-176 128c-17.73 0-35.42-2.01-52.58-5.96zm289.8 100.35l-11.39-7.41-13.24 3.05A234.318 234.318 0 0 1 368 416c-65.14 0-122-25.94-152.43-64.29C326.91 348.62 416 278.4 416 192c0-9.45-1.27-18.66-3.32-27.66C488.12 178.78 544 228.67 544 288c0 34.19-18.75 59.87-34.47 75.39l-16.49 16.28 10.32 20.75c9.38 18.86 20.81 35.19 29.53 46.44-37.19-4.22-67.6-19.41-87.67-32.47zM233.38 182.91l-41.56-12.47c-4.22-1.27-7.19-5.62-7.19-10.58 0-6.03 4.34-10.94 9.66-10.94h25.94c3.9 0 7.65 1.08 10.96 3.1 3.17 1.93 7.31 1.15 10-1.4l11.44-10.87c3.53-3.36 3.38-9.22-.54-12.11-8.18-6.03-17.97-9.58-28.08-10.32V104c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v13.4c-21.85 1.29-39.38 19.62-39.38 42.46 0 18.98 12.34 35.94 30 41.23l41.56 12.47c4.22 1.27 7.19 5.62 7.19 10.58 0 6.03-4.34 10.94-9.66 10.94h-25.94c-3.9 0-7.65-1.08-10.96-3.1-3.17-1.94-7.31-1.15-10 1.4l-11.44 10.87c-3.53 3.36-3.38 9.22.54 12.11 8.18 6.03 17.97 9.58 28.08 10.32V280c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-13.4c21.85-1.29 39.38-19.62 39.38-42.46 0-18.98-12.35-35.94-30-41.23z"></path></svg>
                <span className="mt-0"><span className='text-sm uppercase'>$</span>{!!salary_range_max && salary_range_max / 100}</span>
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  </>
)
};
*/

/*
<div className="absolute bottom-0 mb-3 flex justify-center">
          <div className="flex space-x-5 overflow-hidden rounded-lg bg-white/70 px-4 py-1 shadow">
            <p className="flex items-center font-medium text-gray-500">
              <svg className="mr-2 h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M480,226.15V80a48,48,0,0,0-48-48H80A48,48,0,0,0,32,80V226.15C13.74,231,0,246.89,0,266.67V472a8,8,0,0,0,8,8H24a8,8,0,0,0,8-8V416H480v56a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V266.67C512,246.89,498.26,231,480,226.15ZM64,192a32,32,0,0,1,32-32H208a32,32,0,0,1,32,32v32H64Zm384,32H272V192a32,32,0,0,1,32-32H416a32,32,0,0,1,32,32ZM80,64H432a16,16,0,0,1,16,16v56.9a63.27,63.27,0,0,0-32-8.9H304a63.9,63.9,0,0,0-48,21.71A63.9,63.9,0,0,0,208,128H96a63.27,63.27,0,0,0-32,8.9V80A16,16,0,0,1,80,64ZM32,384V266.67A10.69,10.69,0,0,1,42.67,256H469.33A10.69,10.69,0,0,1,480,266.67V384Z"></path></svg>
              3
            </p>

            <p className="flex items-center font-medium text-gray-500">
              <svg className="mr-2 h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512"><path d="M423.18 195.81l-24.94-76.58C387.51 86.29 356.81 64 322.17 64H157.83c-34.64 0-65.34 22.29-76.07 55.22L56.82 195.8C24.02 205.79 0 235.92 0 271.99V400c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48v-16h256v16c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48V271.99c0-36.07-24.02-66.2-56.82-76.18zm-310.99-66.67c6.46-19.82 24.8-33.14 45.64-33.14h164.34c20.84 0 39.18 13.32 45.64 33.13l20.47 62.85H91.72l20.47-62.84zM80 400c0 8.83-7.19 16-16 16H48c-8.81 0-16-7.17-16-16v-16h48v16zm368 0c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm0-80.01v32H32v-80c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v48zM104.8 248C78.84 248 60 264.8 60 287.95c0 23.15 18.84 39.95 44.8 39.95l10.14.1c39.21 0 45.06-20.1 45.06-32.08 0-24.68-31.1-47.92-55.2-47.92zm10.14 56c-3.51 0-7.02-.1-10.14-.1-12.48 0-20.8-6.38-20.8-15.95S92.32 272 104.8 272s31.2 14.36 31.2 23.93c0 7.17-10.53 8.07-21.06 8.07zm260.26-56c-24.1 0-55.2 23.24-55.2 47.93 0 11.98 5.85 32.08 45.06 32.08l10.14-.1c25.96 0 44.8-16.8 44.8-39.95 0-23.16-18.84-39.96-44.8-39.96zm0 55.9c-3.12 0-6.63.1-10.14.1-10.53 0-21.06-.9-21.06-8.07 0-9.57 18.72-23.93 31.2-23.93s20.8 6.38 20.8 15.95-8.32 15.95-20.8 15.95z"></path></svg>
              2
            </p>

            <p className="flex items-center font-medium text-gray-500">
              <svg className="mr-2 h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504,256H64V61.25a29.26,29.26,0,0,1,49.94-20.69L139.18,65.8A71.49,71.49,0,0,0,128,104c0,20.3,8.8,38.21,22.34,51.26L138.58,167a8,8,0,0,0,0,11.31l11.31,11.32a8,8,0,0,0,11.32,0L285.66,65.21a8,8,0,0,0,0-11.32L274.34,42.58a8,8,0,0,0-11.31,0L251.26,54.34C238.21,40.8,220.3,32,200,32a71.44,71.44,0,0,0-38.2,11.18L136.56,18A61.24,61.24,0,0,0,32,61.25V256H8a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8H32v96c0,41.74,26.8,76.9,64,90.12V504a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V480H384v24a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V474.12c37.2-13.22,64-48.38,64-90.12V288h24a8,8,0,0,0,8-8V264A8,8,0,0,0,504,256ZM228.71,76.9,172.9,132.71A38.67,38.67,0,0,1,160,104a40,40,0,0,1,40-40A38.67,38.67,0,0,1,228.71,76.9ZM448,384a64.07,64.07,0,0,1-64,64H128a64.07,64.07,0,0,1-64-64V288H448Z"></path></svg>
              3
            </p>
          </div>
        </div>
        */
function JobCard({ title, description, id }: Partial<JobPost>) {
  return (
    <>
      <div className="m-2 p-2 col-span-2 bg-gradient-to-tr from-sp-primary to-orange-300 rounded-md">
        <div className="ml-20 w-full">
          <p className="text-white font-semibold text-sm sm:text-4xl">{title}</p>
          <p className="text-white mt-4 capitalize font-normal tracking-wider leading-7">{description}</p>
          {/*<ApplyButtonModal />*/}
          {/*<a href={`/app/jobs/${id}`} className="uppercase inline-block mt-8 text-sm bg-white py-2 px-4 rounded font-semibold hover:bg-indigo-100">apply</a>*/}
        </div>
        
      </div>
    </>
  )
}

function tempLayout() {
  return (
    <>
      <div className="dark:bg-boxdark-2 dark:text-bodydark">
        {/* <!-- ===== Page Wrapper Start ===== --> */}
        <div className="flex h-screen overflow-hidden">
          {/* <!-- ===== Sidebar Start ===== --> */}
          <nav className="bg-gray-800 py-4">
            <div className="container mx-auto flex justify-between items-center">
              <Link to="/" className="text-white font-bold text-xl">
                <svg
                  className="h-8 w-8 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <text x="12" y="16" className="text-white text-xs text-center">
                    Jobs
                  </text>
                </svg>
              </Link>
              <div className="flex space-x-4">
                <Link to="/" className="text-white hover:text-gray-300">
                  Home
                </Link>
                <Link to="/about" className="text-white hover:text-gray-300">
                  About
                </Link>
                <Link to="/pricing" className="text-white hover:text-gray-300">
                  Pricing
                </Link>
                <Link to="/contact" className="text-white hover:text-gray-300">
                  Contact Us
                </Link>
              </div>
            </div>
          </nav>
          {/*<Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />*/}
          {/* <!-- ===== Sidebar End ===== --> */}

          {/* <!-- ===== Content Area Start ===== --> */}
          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            {/* <!-- ===== Header Start ===== --> */}
            <header className="bg-white py-12">
              <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Find Good Jobs Here</h2>
                {/* Additional content for the header */}
              </div>
            </header>
            {/*<Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />*/}
            {/* <!-- ===== Header End ===== --> */}

            {/* <!-- ===== Main Content Start ===== --> */}
            <main>
              <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                <Outlet />
              </div>
            </main>
            {/* <!-- ===== Main Content End ===== --> */}
          </div>
          {/* <!-- ===== Content Area End ===== --> */}
        </div>
        {/* <!-- ===== Page Wrapper End ===== --> */}
      </div>
    </>
  )
}

function Spinner() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="spinner"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20 4v5h-.582m0 0a8.001 8.001 0 00-15.356 2m15.356-2H15M4 20v-5h.581m0 0a8.003 8.003 0 0015.357-2M4.581 15H9"
      />
    </svg>
  );
};

interface ListProps {
  title: string;
  description: string;

};

function List(listItems: Partial<JobPost>[]) {
  /*
   <div className="bg-white min-w-screen">
                <div className="mx-auto min-w-screen max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                  <h2 className="sr-only">Job Posts</h2>

                  <div className="w-full grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

                    {jobs.data.map((job, i) => (
                      <>
                        <a key={job.id} href={`/jobs/${job.id}`} className="group">
                          <ListItem title={job.title ?? 'Ttile Error'} description={job.description ?? 'Description Error'} createdAt={job.createdAt} is_full_time={job.is_full_time} start_date={job.start_date} />
                        </a>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              */
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Job Posts</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {listItems.map((item) => (
              <a key={item.id} href={`/jobs/${item.id}`} className="group">
                {/*<ListItem title={item.title ?? 'Ttile Error'} description={item.description ?? 'Description Error'} />*/}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
};

interface ListItemProps {
  title: string;
  description: string;
  createdAt: string;
  is_full_time: boolean;
    start_date: string;
/*
    id: string
    createdAt: string;
    updatedAt: string;
    title: string;
    description: string;
    is_full_time: boolean;
    start_date: string;
    end_date: string | null;
    responsibilities: string | null;
    requirements: string | null;
    salary_range_min: number;
    salary_range_max: number;
    userId: string;
    */
};

function ListItem(props: ListItemProps) {
  return (
    <>
      <div className="h-full w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        {/*<img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
  />*/}
  <p className="mt-1 text-md font-medium text-gray-900">{props.createdAt}</p>
        <h2 className="mt-1 text-lg font-medium text-gray-900">{props.title}</h2>
        <p className="mt-1 text-sm font-medium text-gray-900">{props.description}</p>
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{`Start Date: ${props.start_date}`}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{`Fulltime: ${props.is_full_time}`}</p>
    </>
  )
}