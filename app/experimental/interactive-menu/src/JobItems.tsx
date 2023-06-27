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
import { Link, useSearchParams, useFetcher } from '@remix-run/react';
import { json } from "@remix-run/node";
import {
  isRouteErrorResponse, useRouteError, useAsyncError
} from "@remix-run/react";
import type { JobPost } from '~/models/job.server';
import type { Category } from "~/models/category.server";
import { getAllCategories } from '~/models/category.server';
import { getAllJobPosts, getAllJobPostsByCategory } from '~/models/job.server';

import { useLoaderData } from "@remix-run/react";
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
import { Item } from '~/experimental/interactive-menu/src/JobItem';
import JobMenuItem from '~/experimental/interactive-menu/src/JobMenuItem';
// import plates from './plates.json';
// import styles from './items.styles.css';
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
interface Props {
  search?: string
  filter?: number | null
  menuOption?: string
  categoryId?: string;
}

export const Items = ({ search, filter, menuOption, categoryId }: Props) => {
  // const [list, setList] = React.useState(plates);
  const fetcher = useFetcher<{formattedCategoryJobs: FormattedJobPost[]}>();
  useEffect(() => {
    fetcher.load(`api/categories/${categoryId}`)
  }, [categoryId]);
/*
  function handleSearch(title: string) {
    const regex = new RegExp(search, 'i')
    return regex.test(title)
  }
  function handleFilter(id: number) {
    if (filter !== null) return filter === id
    return true
  }

  function order(newList: typeof plates) {
    switch (menuOption) {
    case 'portion':
      return newList.sort((a, b) => (a.size > b.size ? 1 : -1))
    case 'amount_people':
      return newList.sort((a, b) => (a.serving > b.serving ? 1 : -1))
    case 'price':
      return newList.sort((a, b) => (a.price > b.price ? 1 : -1))
    default:
      return newList
    }
  }

  React.useEffect(() => {
    const newList = plates.filter(
      item => handleSearch(item.title) && handleFilter(item.category.id)
    )
    setList(order(newList))
  }, [search, filter, menuOption])*/
  const [menuData, setMenuData] = useState<FormattedJobPost[]>([]);
  useEffect(() => {
  
    if (fetcher.state === "idle" && fetcher.data) {
      const { formattedCategoryJobs } = fetcher.data
      setMenuData(formattedCategoryJobs);
    };
    
  }, [fetcher.data, fetcher.state]);
  // useEffect(() => console.log(`fetcher.data: ${JSON.stringify(fetcher.data)}`), [fetcher.data]);
  // useEffect(() => console.log(`fetcher.data: ${fetcher.state}`), [fetcher.state]);
  // useEffect(() => console.log(`menuData: ${JSON.stringify(menuData)}`), [menuData]);
  
  // TODO: just a hack for now, need 5 elements for worst-case 'fallback' render
  // const [items, setItems] = useState<JSX.Element>(<><p key="no-data">no data available</p></>);
  
  /*useEffect(() => {
    const menuItems = menuData.map((job) => (
      <Item key={job.id} {...job} />
        ));

    // setItems(menuItems)
  }, [menuData]); */

  return (
    <div className={'styles.items'}>
      {/*fetcher.state === "idle" && fetcher.data && Array.from(fetcher.data).map(job => (
        <Item key={job.id} {...job} />
      ))*/}
      
      {menuData.length > 0 ? menuData.map((job) => (
          <>
          <div className="flex">
          <Item key={job.id} {...job} />
          </div>
          </>
            )) : (
        <>
        <p>no data available</p>
        </>
            )}
    </div>
  )
}