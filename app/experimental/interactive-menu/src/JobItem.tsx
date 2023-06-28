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
import { JobActionButtons } from "~/components/tailwind-components/JobActionButtons";
// import styles from './item.styles.css';
// import plates from '../plates.json';
import {classNames} from '~/utils';

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

export const Item = (props: FormattedJobPost) => {
  // const { title, description, category, size, serving, price, photo } = props
  return (
    <div className='flex flex-wrap w-full mb-2 p-2 rounded-md border-2 border-solid border-black'>
      {/*<div className={'styles.item__image'}>
        <img src={""} alt={props.title} />
  </div>*/}
      <div className='flex flex-1 flex-col flex-wrap justify-around items-center py-5 sm:flex-row sm:mt-5 sm:p-0'>
        <div>
          <h2 className='font-bold mb-2 text-xl text-gray-800'>{props.title}</h2>
          <p className='font-normal text-base text-gray-600'>{props.description}</p>
        </div>
        <div className="flex flex-wrap justify-between mb-1 sm:justify-start">
          <div
            className={classNames('flex items-center rounded-lg border-2 font-bold text-base justify-center px-2 py-2', `${props.is_full_time ? 'border-red-400' : 'border-black'}`)}
          >
            {props.is_full_time ? 'full-time' : 'part-time'}
          </div>
          <div className='flex text-sm items-center justify-center ml-2'>Created On: {props.createdAt}</div>
          <div className='flex text-sm items-center justify-center'>
            Requirements: {props.requirements}
          </div>
          <div className='flex text-sm font-bold items-center justify-center'>Max Salary: <span className="text-red-400">${(props.salary_range_max / 100).toFixed(2)}</span></div>
        </div>
        <JobActionButtons />
      </div>
    </div>
  )
}