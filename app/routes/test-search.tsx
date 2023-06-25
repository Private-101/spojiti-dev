// import type { ActionArgs } from "@remix-run/node";
// import { redirect } from "@remix-run/node";

// import { logout } from "~/services/session.server";

// export const action = async ({ request }: ActionArgs) => logout(request);

// export const loader = async () => redirect("/");
import { Fragment, useState, useEffect } from 'react';
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { redirect, json } from "@remix-run/node";
import { Listbox, Transition } from "@headlessui/react";
import { Form, useFetcher, useSearchParams, useLoaderData, Outlet } from "@remix-run/react";
// import { useInfiniteScroll } from 'react-infinite-scroll-hook';
import { CheckIcon } from '@heroicons/react/24/solid';

import type { JobPost } from '~/models/job.server';
import type { Category } from "~/models/category.server";
import { getAllCategories } from '~/models/category.server';

interface SearchIndexLoaderData {
  categories: Category[]
};

export const loader = async () => {
  const categories = await getAllCategories();

  return json<SearchIndexLoaderData>({categories});
};

export default function SearchIndexPage() {
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
    <div className="relative w-40">
      <div className="p-2 m-2 w-full">
    <Form>
      <label htmlFor="categories">Categories:</label>
      <br />
      <Listbox value={selectedCategory} by='id' onChange={setSelectedCategory}>
      <Listbox.Button>{selectedCategory.title}</Listbox.Button>
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
                className={`p-2 ${
                  active ? 'bg-sp-primary text-white outline-1 outline-black' : 'bg-gray-200 text-black'
                }`}
              >
                {selected && (
                  <div className='w-12 h-8 p-2'>
                    <CheckIcon />
                  </div>
                )}
                {cat.title}
              </li>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
      </Listbox>
      
    </Form>
    </div>
    {jobs.state === "loading" ? <Spinner /> : null}

    {jobs && jobs.data && jobs.data?.length > 0 ? (
      <>
      <ul>
      {jobs.data.map((job, i) => (
        
        <li key={i}>
          {job.title}
        </li>
        
      ))}
      </ul>
      </>
    ) : null}
      
    </div>
  );
};

/*
<p>
        <button type="submit">Submit</button>{" "}
        {searchParams.has("category") ? (
          <span>You submitted: {searchParams.get("category")}</span>
        ) : null}
      </p>
      
<div className="combobox-wrapper">
          <Listbox.Input
            id="showSearch"
            name="lang"
            onChange={(e) => {
              // When the input changes, load the languages
              loadMoreData(e.target.value, page);
            }}
          />
*/
/*{/* Add a nice spinner when the fetcher is loading /}*/
/*
{jobs.state === "loading" ? <Spinner /> : null}
</div>

{/* Only show the popover if we have results /}
/*
{data && data.length > 0 ? (
  <Listbox.Options>
    <Transition
      as={React.Fragment}
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div ref={infiniteRef}>
        {data.map((lang, index) => (
          <Listbox.Option key={index} value={lang.alpha2}>
            <span>{lang.name} ({lang.alpha2})</span>
          </Listbox.Option>
        ))}
      </div>
    </Transition>
  </Listbox.Options>
) : null}




          */

  
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
  }