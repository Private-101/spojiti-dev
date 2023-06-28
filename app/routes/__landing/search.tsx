import * as React from "react";
import { useState, useEffect, Fragment, useRef } from "react";
import { FiGithub } from 'react-icons/fi';
import { RiMoonClearLine, RiSunLine } from 'react-icons/ri';
import UserPic from '~/components/common/assets/images/user/user-01.png';
import HomePageExample from '~/experimental/interactive-menu/pages/home';
import HomeStylesUrl from '~/experimental/interactive-menu/styles/home.styles.css';
import GlobaltylesUrl from '~/experimental/interactive-menu/styles/global.styles.css';
import CheckboxStylesUrl from '~/experimental/interactive-menu/styles/checkbox.styles.css';
import type { LinksFunction } from '@remix-run/node';
import { Link, useSearchParams } from '@remix-run/react';
import { json } from "@remix-run/node";
import {
  isRouteErrorResponse, useRouteError, useAsyncError
} from "@remix-run/react";
// import WebsiteNavbar from '~/components/tailwind-components/WebsiteNavbar';
// import { Fragment, useState, useEffect } from 'react';
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
// import { Listbox, Transition, Dialog } from "@headlessui/react";
// import { Form, useFetcher, useSearchParams, useLoaderData, Outlet } from "@remix-run/react";
// import Header from '../components/Header';
// import Sidebar from '../components/Sidebar';

// import { useInfiniteScroll } from 'react-infinite-scroll-hook';

// import { CheckIcon } from '@heroicons/react/24/solid';
// import { ApplyButtonModal } from '~/components/headlessui/ApplyDialog';

import type { JobPost } from '~/models/job.server';
import type { Category } from "~/models/category.server";
import { getAllCategories } from '~/models/category.server';
import { getAllJobPosts, getAllJobPostsByCategory } from '~/models/job.server';

import { useFetcher, useLoaderData } from "@remix-run/react";
import { allergyFilter, type Menu as IMenu } from "~/experimental/interactive-menu/alleryFilterFunc";
import Footer from '~/components/legacy/temp/Footer';
import MenuItem from "~/experimental/interactive-menu/src/JobMenuItem";
import JobMenu from "~/experimental/interactive-menu/src/JobMenu";
import { Checkbox, TestCheckboxWithRef, type OptionProps } from "~/experimental/interactive-menu/src/Checkbox";
import { allergens, allergensWithExtras, type IAllergen } from "~/experimental/interactive-menu/data/allergens";
import data from '~/experimental/interactive-menu/data/hardData';
import type {SingleValue, ActionMeta, MultiValue } from 'react-select';
import Select, { SelectInstance } from 'react-select';
import AsyncSelect from 'react-select/async';
import CreatableSelect from 'react-select/creatable';
import makeAnimated from 'react-select/animated';
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

// const animatedComponents = makeAnimated();

export default function TestLayoutPage() {
  const fetcher = useFetcher<JobMenuData>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [jobs, setJobs] = useState<FormattedJobPost[]>([]);
  const [categories, setCategories] = useState<FormattedCategory[]>([]);

  // const [menuOptionsX, setMenuOptionsX] = useState<MenuOption[] | undefined>(undefined);
  useEffect(() => {
    if (fetcher.state === "idle" && fetcher.data == null) {
      fetcher.load(`api/job-menu-data`)
    }
    
    // setMenuOptionsX(menuOptions);
  }, [fetcher]);

  useEffect(() => {
    if (fetcher.data) {
      setJobs(fetcher.data.jobs);
      setCategories(fetcher.data.categories);
    }
  }, [fetcher.data]);

  
  // const { categories, jobs } = useLoaderData<TestLoaderData>();
  // const [searchParams, setSearchParams] = useSearchParams();
  // const [error, setError] = useState<boolean>(false);
  // const [loading, setLoading] = useState<boolean>(false);
  // const [checkedItems, setCheckedItems] = useState<Array<string>>([]);
  // const [allergensWithExtrasChecked, setAllergensWithExtrasChecked] = useState<typeof allergensWithExtras>(allergensWithExtras)
  /*const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const arr = Array.from(allergensWithExtrasChecked);
    if (event.target.checked === true) {
      console.log(`handleChange:\n${event.target.value}\nchecked: true`);
      const toEdit = arr.find((item, i) => item.name = event.target.value);
      arr.push(...allergensWithExtrasChecked);
      setCheckedItems(arr);
    } else if (event.target.checked === false) {
      console.log(`handleChange:\n${event.target.value}\nchecked: false`);
      arr.filter((item, i) => item !== event.target.value);
      setCheckedItems(arr);
    }
    // new Set(Array.from([checkedItems, [event.target.value]: event.target.checked]))
    const arr = Array.from(checkedItems ?? []);
    if (event.target.checked === true) {
      console.log(`handleChange:\n${event.target.value}\nchecked: true`);
      arr.push(event.target.value);
      setCheckedItems(arr);
    } else if (event.target.checked === false) {
      console.log(`handleChange:\n${event.target.value}\nchecked: false`);
      arr.filter((item, i) => item !== event.target.value);
      setCheckedItems(arr);
    }
    
    
     setCheckedItems((items) => {
      if (!items) {
        return [event.target.value]
      };  
      
      return [
        ...items,
        event.target.value
        // event.target.checked ? event.target.value : undefined
        // [event.target.value]: event.target.checked,
      ] 
    }); 
    // console.log(JSON.stringify(checkedItems));
  };
  const checkboxRef = useRef<HTMLInputElement | null>(null);
  const [checkedItems, setCheckedItems] = useState<Array<string>>([]);
  const handleChange = ({name, option}: {name: string, option: OptionProps}) => {
    // name === checkboxRef?.current?.value && 
    if (checkedItems.includes(name)) {
      const restArray = checkedItems.filter((item) => item !== name);
      // const [name, ...rest] = checkedItems;
      console.log(`Found ${name}, removing from checkedItems state`);
      setCheckedItems(restArray);
    } else {
      console.log(`${name} not found, adding to checkedItems state`);
    // if (checkboxRef && checkboxRef.current) {
      // setCheckedItems(prev => [...prev, checkboxRef.current.value]);
    // }
    setCheckedItems(prev => [...prev, name]);
    };
  };

  useEffect(() => console.log(JSON.stringify(checkedItems)), [checkedItems]);

   const handleCheckboxClick = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const arr = Array.from(checkedItems ?? []);
    if (event.currentTarget.checked === true) {
      console.log(`handleCheckboxClick:\n${event.currentTarget.value}\nchecked: true`);
      arr.push(event.currentTarget.value);
      setCheckedItems(arr);
    } else if (event.currentTarget.checked === false) {
      console.log(`handleCheckboxClick:\n${event.currentTarget.value}\nchecked: false`);
      arr.filter((item, i) => item !== event.currentTarget.value);
      setCheckedItems(arr);
    }
    console.log(JSON.stringify(checkedItems));
  } */

  
  // const innerCheckboxRef = useRef<HTMLInputElement | null>(null);
  

  // console.log(JSON.stringify(checkedItems));
  /* const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  const [selectedOption, setSelectedOption] = useState<SingleValue<{ value: string; label: string; } | null>>(null);

   const menuOptions = [
    'No Diet',
    'Vegetarian',
    'Vegan',
    'Pescatarian'
  ]; 
  const menuOptions: MenuOption[] = categories.map((cat) => {
    return {value: cat.id, label: cat.title}
  });
  
  
  [
    {value: 'No Diet', label: 'No Diet'},
    {value: 'Vegetarian', label: 'Vegetarian'},
    {value: 'Vegan', label: 'Vegan'},
    {value: 'Pescatarian', label: 'Pescatarian'}
  ];*/
/*
const categories: {
    id: string;
    createdAt: string;
    updatedAt: string;
    title: string;
    description: string | null;
}[]

  const [selectedMenuOption, setSelectedMenuOption] = useState<MenuOption | null>(null);
  
  
  useEffect(() => {
    const handleSetSearch = (option: MenuOption) => {
      setSearchParams([["category", option.value]])
    };

    if (selectedMenuOption) {
      handleSetSearch(selectedMenuOption);
    }
  }, [selectedMenuOption, setSearchParams]);

  // const [menuData, setMenuData] = useState<FormattedJobPost[]>([]);

  

  // const [optionValue, setOptionValue] = useState<string>('No Diet');
  
    react-select
  */
    // const selectRef = useRef<SelectInstance<MenuOption> | null>(null);
    // const asyncRef = useRef<SelectInstance<MenuOption> | null>(null);
    // const creatableRef = useRef<SelectInstance<MenuOption> | null>(null);

  /* const filterOptions = (inputValue: string) => {
    const filteredMenuOptions = menuOptions.filter((option) =>
    option.label.toLowerCase().includes(inputValue.toLowerCase())
    );
    return Boolean(filteredMenuOptions)
  }; */

  // const handleSelectChange = (newValue: SingleValue<MenuOption>, actionMeta: ActionMeta<MenuOption>): void => {
    // (newValue: SingleValue<MenuOption>, actionMeta: ActionMeta<MenuOption>) => void
    /*
    let x = actionMeta.removedValues

    ationMeta Properties:
    (property) action: "select-option" | "deselect-option" | "remove-value" | "pop-value" | "clear" | "create-option" 
    (property) name?: string | undefined
    (property) option?: MenuOption | undefined // MenuOption is used as the state type 
    // example: const [menuOption, setMenuOption] = setState<MenuOption | null>(null);
    (property) removedValue?: MenuOption | undefined // probably for previous, next functionality
    (property) removedValues?: Options<MenuOption> | undefined // same
    */
    
    // setSelectedMenuOption(newValue);
    // console.log('New Option Value Selected: ' + JSON.stringify(newValue));
  // }

    // Focus handlers
    /*
  const focus = () => {
    console.log(selectRef);
    selectRef.current?.focus();
  };
  const focusAsync = () => {
    console.log(asyncRef);
    asyncRef.current?.focus();
  };
  const focusCreatable = () => {
    console.log(creatableRef);
    creatableRef.current?.focus();
  };

  // Blur handlers
  const blur = () => {
    selectRef.current?.blur();
  };
  const blurAsync = () => {
    asyncRef.current?.blur();
  };
  const blurCreatable = () => {
    creatableRef.current?.blur();
  };
*/
  
  /*
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOptionValue(e.target.value);
  };
  */
  // const apiFetcher = useFetcher<FetcherData>();
  

  // useEffect(() => {
    // TODO: just map checkedItems, since all allergens are set as the initialState?
    // console.log('item checked, filtering allergy data...');
    // const usersDiet = allergens
  // .filter((ingredient) => checkedItems.includes(ingredient.name))
  // .filter((ingredient) => allergensWithExtrasChecked.filter((item) => item.checked && ingredient.name.includes(item.name))
    // const filteredItems = checkedItems.filter((item) => ingredient.name === item)
    // checkedItems[ingredient.name] && ingredient.name
  // )
  // .map((ingredient) => ingredient.name);
  // const selectedDiet = menuOptions.filter((option) => checkedItems.includes(option.value))
  // console.log(`user diet: ${JSON.stringify(usersDiet)}`);
    // const filteredMenu = jobs.filter((job) => {}) // allergyFilter(data, [...usersDiet, selectedMenuOption]);
    /*
    (parameter) job: {
      id: string;
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
}

    const formattedJobs = jobs.map((job) => {
      return {
        id: job.id,
      createdAt: job.createdAt,
      updatedAt: job.updatedAt,
      title: job.title,
      description: job.description,
      is_full_time: job.is_full_time,
      start_date: job.start_date,
      end_date: job.end_date,
      responsibilities: job.responsibilities,
      requirements: job.requirements,
      salary_range_min: job.salary_range_min,
      salary_range_max: job.salary_range_max,
      userId: job.userId
      }
    });

    setMenuData(formattedJobs);
  }, [jobs]);

  // useEffect(() => console.log(`filtered menu: ${JSON.stringify(menuData)}`), [menuData])

  if (loading) {
    // TODO: replace with spinner
    return <div>loading...</div>
   };

   if (error) {
    // setLoading(false);
    return <div>failed to load</div>;
   };

   if (!data) {
    // setLoading(true);
    // apiFetcher.load('/api/hard-data.loader');
};
*/

// TODO: just a hack for now, need 5 elements for worst-case 'fallback' render
// const [items, setItems] = useState<JSX.Element[]>([<></>]);

/* useEffect(() => {
  const menuItems = menuData.map((job) => (
        <MenuItem
          key={job.id}
          title={job.title}
          salary_range_min={(job.salary_range_min / 100).toFixed(2)}
          salary_range_max={(job.salary_range_max / 100).toFixed(2)}
        />
      ));
  setItems(menuItems)
}, [menuData]); */

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

const Header = () => {
    return (
      <header className='w-full mx-auto max-w-2xl justify-center h-16 pt-4'>
        <div className='flex flex-row px-5'>
          <Avatar image={UserPic} alt='Picture of the Author' />
          <Navigation />
          <HeaderIcons />
        </div>
      </header>
    );
  };

  interface HeaderIconProps {
    onClick?: () => void;
    children: React.ReactNode;
  }
  const HeaderIcon = ({ onClick, children }: HeaderIconProps) => {
    return (
      <button className='cursor-pointer rounded-full text-gray-400 hover:text-orange-400 p-1'
              onClick={onClick}>
        {children}
      </button>
    );
  };

  const ThemeToggle = () => {
  // const { theme, setTheme } = useTheme();
    const setTheme = (msg: string) => console.log(msg);
    const theme: string = 'light';
  return (
    <div className='p-1'>
      <HeaderIcon onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        {theme === 'light' ? <RiMoonClearLine size={25} /> : <RiSunLine size={25} />}
      </HeaderIcon>
    </div>
  );
};

const HeaderIcons = () => {
    return (
      <div className='basis-1/3 flex justify-end'>
        <ThemeToggle />
        <HeaderIcon>
          <Link to='https://github.com/chrismphilp/philp.io'>
            <FiGithub size={25} />
          </Link>
        </HeaderIcon>
      </div>
    );
  };
  
  interface AvatarProps {
    image: string;
    alt: string;
  }
  const Avatar = ({ image, alt }: AvatarProps) => {
    return (
      <div className='basis-1/3 flex items-center'>
        <Link to='/' className='hover:none'>
          <img className='rounded-full shadow-lg ring-[0.85px] ring-orange-400 backdrop-blur mr-4 cursor-pointer hover:ring-[1.15px]'
                 src={image}
                 width={37.5}
                 height={37.5}
                 alt={alt}
                 />
        </Link>
      </div>
    );
  };

  const Navigation = () => {
    return (
      <div className='basis-1/3 px-5'>
        <nav className='flex justify-center text-xl text-gray-400 backdrop-blur'>
          <Link to='/tech' className='cursor-pointer p-2 px-3 hover:text-orange-400'>Tech</Link>
          <Link to='/misc' className='cursor-pointer p-2 px-3 hover:text-orange-400'>Misc</Link>
          <Link to='/favourites' className='cursor-pointer p-2 px-3 hover:text-orange-400'>Favourites</Link>
        </nav>
      </div>
    );
  };

  const OldFooter = () => {
    return (
      <footer className='bg-sp-body-bg dark:bg-gray-700 text-gray-400 dark:text-gray-100 py-5 border-t border-sp-primary border-opacity-60 dark:border-opacity-100'>
        <div className='flex justify-center'>© spojiti.com</div>
      </footer>
    );
  };