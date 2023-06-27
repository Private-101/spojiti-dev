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
  jobs: JobPost[];
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
  /* const fetcher = useFetcher<JobMenuData>();
  const [data, setData] = useState<JobMenuData | null>(null);
  const [menuOptionsX, setMenuOptionsX] = useState<MenuOption[] | undefined>(undefined);
  useEffect(() => {
    if (fetcher.state === "idle" && fetcher.data == null) {
      fetcher.load("/api/job-menu-data");
    }
    
    // setMenuOptionsX(menuOptions);
  }, [fetcher]); */
  // const menuOptions: MenuOption[] | undefined = data.categories.map((cat) => {
  // return {value: cat.id, label: cat.title}
  // });

  const [searchParams, setSearchParams] = useSearchParams();

  const checkboxRef = useRef<HTMLInputElement | null>(null);
  const [checkedItems, setCheckedItems] = useState<Array<string>>([]);

  const handleChange = ({ name, option }: { name: string, option: OptionProps }) => {
    // option.value === checkboxRef?.current?.value && 
    if (checkedItems.includes(option.value)) {
    // if (searchParams.has(name) && searchParams.get(name) !== "") {
      // const restArray = checkedItems.filter((item) => item !== name);
      // console.log(`Found ${name}, removing from searchParams state`);
      // searchParams.delete(name);
      // const [name, ...rest] = checkedItems;
      console.log(`Found ${name}, removing from checkedItems state`);
      setCheckedItems((prev) => prev.filter((category) => category !== option.value));
      // setSearchParams({ ...Object.fromEntries(searchParams), [name]: "" });
    } else {
      // console.log(`${name} not found, adding to searchParams state`);
      // searchParams.append(name, option.value);
      console.log(`${name} not found, adding to checkedItems state`);
      // if (checkboxRef && checkboxRef.current) {
      // setCheckedItems(prev => [...prev, checkboxRef.current.value]);
      // }
      setCheckedItems(prev => [...prev, option.value]);
      // setSearchParams([...searchParams, [`category-${name}`, option.value]]);
      // setSearchParams({ ...Object.fromEntries(searchParams), [name]: option.value });
    };
  };

  useEffect(() => console.log(JSON.stringify(checkedItems)), [checkedItems]);
  // const categoryJobsFetcher = useFetcher<JobPost[]>();
  // const [checkedCategories, setCheckedCategories] = useState<string[]>([]);
  // const [selectedCategoryJobs, setSelectedCategoryJobs] = useState<FormattedJobPost[][]>([]);

  // const categories: Category[] = []; // You should fetch or define your categories here

  /* const handleCheckboxChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (target.checked) {
      setCheckedCategories((prev) => [...prev, target.value]);
    } else {
      setCheckedCategories((prev) => prev.filter((category) => category !== target.value));
    }
  };

  useEffect(() => {
    const fetchCategoryJobs = async () => {
      let allJobs: FormattedJobPost[][] = [];
      for (let category of checkedCategories) {
        await categoryJobsFetcher.load(`api/categories/${category}`);
        if (categoryJobsFetcher.data) allJobs.push(categoryJobsFetcher.data) // Array.from() // [...allJobs, ];
      }
      setSelectedCategoryJobs(allJobs);
    };
    fetchCategoryJobs();
  }, [checkedCategories]); */


  /* const handleCheckboxChange = async ({name, option}: {name: string, option: OptionProps}) => {
    await categoryJobsFetcher.load(`api/categories/${option.value}`);
    
    // Note that event.target.checked will be a boolean
    // You may want to store some string or number instead
    // setSearchParams({ ...Object.fromEntries(searchParams), [event.target.name]: event.target.checked });

  }; */

  /* useEffect(() => {
    if (categoryJobsFetcher.data) {
      setSelectedCategoryJobs(prev => [...prev, ...categoryJobsFetcher.data])
    }
    
  }, [categoryJobsFetcher.data]) */

  /*
  const categories: {
      id: string;
      createdAt: string;
      updatedAt: string;
      title: string;
      description: string | null;
  }[]
  */
  // const [selectedMenuOption, setSelectedMenuOption] = useState<FormattedCategory | null>(null);


  /* useEffect(() => {
    const handleSetSearch = (index: number, option: FormattedCategory['id']) => {
    // setSelectedMenuOption(option);
    setSearchParams([...searchParams, [`category-${index}`, option]])
  };

    if (checkedItems.length > 0) {
      checkedItems.forEach((item, i) => handleSetSearch(i, item))
      // handleSetSearch(selectedMenuOption);
    }
  }, [checkedItems, setSearchParams]);  */

  // const [menuData, setMenuData] = useState<FormattedJobPost[]>([]);

  /* const handleSelectChange = useCallback((newValue: SingleValue<MenuOption>, actionMeta: ActionMeta<MenuOption>): void => {
    if (newValue && newValue.value) {
      setSelectedMenuOption(newValue);
    // setSearchParams([["category", newValue.value]]);
    // console.log('New Option Value Selected: ' + JSON.stringify(newValue));
    } else {
      setSelectedMenuOption(null);
      // setSearchParams([["category", ""]]);
    };
  }, []) */

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
  
    useEffect(() => {
  
      if (props.jobs) {
        const formattedJobs: FormattedJobPost[] = props.jobs.map((job) => {
          return {
            id: job.id,
          createdAt: job.createdAt.toDateString(),
          updatedAt: job.updatedAt.toDateString(),
          title: job.title,
          description: job.description,
          is_full_time: job.is_full_time,
          start_date: job.start_date.toDateString(),
          end_date: job.end_date?.toDateString() ?? null,
          responsibilities: job.responsibilities,
          requirements: job.requirements,
          salary_range_min: job.salary_range_min,
          salary_range_max: job.salary_range_max,
          userId: job.userId
          }
        });
  
        setMenuData(formattedJobs);
      };
      
    }, [props.jobs]);
  
  // TODO: just a hack for now, need 5 elements for worst-case 'fallback' render
  // const [items, setItems] = useState<JSX.Element[]>([<></>]);
  
   useEffect(() => {
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
    <section className={'reactiveMenu'} id={props.id} >
      <section className={"controller"} key={Math.random()}>
        <div className={"selectList"} key={Math.random()}>
          {/*props.categories && (
            <Fragment>
            <h4>Select</h4>
            <Select
             // key={Math.random()}
            id={`select-menu`}
            name="menu-options"
            // filterOption={(o, i) => filterOptions(i)}
          // defaultValue={props.categories[0]}
          // onChange={handleSelectChange}
          options={props.categories}
          // autoFocus
          closeMenuOnSelect={true}
          openMenuOnFocus
        />
            </Fragment>
          )*/}
        </div>
        <fieldset className={"group"}>
          <legend>Select any of the categories below</legend>
          <ul className={"checkbox"}>
            {props.categories.map((cat) => (
              <li key={cat.id}>
                {/*<label className={"checkboxLabel"} key={item.key} htmlFor={item.name}>*/}
                <TestCheckboxWithRef
                  key={cat.id}
                  innerRef={checkboxRef}
                  option={{ label: cat.title, value: cat.id, disabled: false }}
                  name={cat.title}
                  // type is removed here because it is set internally
                  // type="checkbox"
                  value={checkedItems.includes(cat.id)}
                  // value={searchParams.has(cat.title) && searchParams.get(cat.title) !== ""}
                  onChange={handleChange}
                // onClick={handleCheckboxClick}
                />
              </li>
            ))}
          </ul>
        </fieldset>
      </section>
      {checkedItems.map((item) => (
        <Items key={item} categoryId={item} />
      ))}
      {/*selectedMenuOption ? (
        <h3 key={Math.random()}>Available Jobs for {selectedMenuOption.title}:</h3>
      ) : (
        <h3 key={Math.random()}>Available Jobs:</h3>
      )*/}
      {/*props.jobs*/}
      {/*<p>MENU ITEMS:</p>*/}
      {/*props.jobs.map((job) => (
        <MenuItem
          key={job.id}
          title={job.title}
          salary_range_min={(job.salary_range_min / 100).toFixed(2)}
          salary_range_max={(job.salary_range_max / 100).toFixed(2)}
        />
      ))*/}
    </section>
  );
};

/*
const JobMenu = (props: MenuProps) => {
  return (
    <section className={'reactiveMenu'} id={props.id} >
      {props.children}
      {props.category ? (
        <h3 key={Math.random()}>Available Jobs for {props.category.label}:</h3>
      ) : (
        <h3 key={Math.random()}>Available Jobs:</h3>
      )}
      {props.jobs}
    </section>
  );
};
*/

export default JobMenu