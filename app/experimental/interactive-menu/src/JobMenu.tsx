import * as React from "react";
import { useState, useEffect, Fragment, useRef, useCallback } from "react";
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
import { unslugify, classNames } from "~/utils";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { allergyFilter, type Menu as IMenu } from "~/experimental/interactive-menu/alleryFilterFunc";

import MenuItem from "~/experimental/interactive-menu/src/JobMenuItem";
// import JobMenu from "~/experimental/interactive-menu/src/JobMenu";
import { Checkbox, TestCheckboxWithRef, type OptionProps } from "~/experimental/interactive-menu/src/Checkbox";
import { allergens, allergensWithExtras, type IAllergen } from "~/experimental/interactive-menu/data/allergens";
import data from '~/experimental/interactive-menu/data/hardData';
import type { SingleValue, ActionMeta, MultiValue } from 'react-select';
// import Select, { SelectInstance } from 'react-select';
import AsyncSelect from 'react-select/async';
import CreatableSelect from 'react-select/creatable';
import makeAnimated from 'react-select/animated';

import styles from "../../styles/home.styles.css";
import Select from 'react-select';
import { Items } from "~/experimental/interactive-menu/src/JobItems";

interface JobMenuData {
  categories: Category[];
  jobs?: JobPost[];
}

// const animatedComponents = makeAnimated();
interface FormattedJobPost {
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
interface FormattedCategory {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  description: string | null;
}
interface MenuProps {
  id: string;
  categories: FormattedCategory[];
  jobs: FormattedJobPost[];
  children?: JSX.Element
  // children: JSX.Element;
  // category: MenuOption | null;
  // jobs: JSX.Element[];
};

interface MenuOption {
  [key: string]: string
  // value: string;
  // label: string;
};

const JobMenu = (props: MenuProps) => {

  const checkboxRef = useRef<HTMLInputElement | null>(null);
  const [checkedItems, setCheckedItems] = useState<Array<string>>([]);

  const handleChange = ({ name, option }: { name: string, option: OptionProps }) => {
    if (checkedItems.includes(option.value)) {
  setCheckedItems((prev) => prev.filter((category) => category !== option.value));
    } else {

      console.log(`${name} not found, adding to checkedItems state`);
      
      setCheckedItems(prev => [...prev, option.value]);
      };
  };

  useEffect(() => console.log(JSON.stringify(checkedItems)), [checkedItems]);

  return (
    <section className='bg-sp-body-bg dark:bg-sp-gray-custom p-2 w-[80%] rounded-md border-2 border-sp-primary' id={props.id} >
      <header className="flex flex-row items-center justify-center">
      <h1 className="font-bold text-sp-body-text text-lg">Interactive Restaurant Job Search</h1>
      </header>
      <section className='flex flex-col items-center justify-between h-[10%] bg-sp-gray-custom bg-opacity-10 dark:bg-opacity-0 rounded-md p-1 mb-8'>
        <fieldset className='mb-5 p-3 border-black rounded-md sm:p-1 sm:border-transparent'>
          <legend className="m-0 p-0 font-bold ml-5 text-sp-body-text">Select any of the categories below</legend>
          <ul className='m-0 p-0 ml-5 list-none'>
            {props.categories.map((cat) => (
              <li key={cat.id} className="inline-block w-48 pl-2 border-2 border-transparent border-solid hover:bg-sp-primary/50 hover:border-black hover:rounded-lg hover:cursor-pointer focus:bg-sp-primary/50 focus:border-black focus:cursor-pointer">
    
                <TestCheckboxWithRef
                  key={cat.id}
                  innerRef={checkboxRef}
                  option={{ label: cat.title, value: cat.id, disabled: false }}
                  name={cat.title}
                  // type is removed here because it is set internally
                  // type="checkbox"
                  value={checkedItems.includes(cat.id)}
            
                  onChange={handleChange}
                // onClick={handleCheckboxClick}
                />
              </li>
            ))}
          </ul>
        </fieldset>
        <p className="text-sm">*Note* Every time a new category is added to the database, it will be automatically updated here!</p>
      </section>
      {checkedItems.map((item) => (
        <>
        {props.categories.filter((category) => category.id === item).map((cat) => (
          <>
          <p className="text-lg font-bold text-sp-body-text mb-2 max-w-fit border-b-2 border-sp-primary">{unslugify(cat.title)}</p>
          </>
        ))}
        <Items key={item} categoryId={item} />
        </>
      ))}
      {props.children ? (
        <>
        {props.children}
        </>
      ): null}
    </section>
  );
};



export default JobMenu