/*
    This is the default route rendered when visiting /app, however, the user should
    only land here if they are not signed in. If they are, 
    they should be redirected to /app/dashboard or maybe app/$userId
*/
import { json, redirect } from '@remix-run/node';
import { useSearchParams, Link, Form, useFetcher, useLoaderData, Outlet } from "@remix-run/react";
import { MagnifyingGlassIcon, XMarkIcon, UserCircleIcon, CogIcon, BellIcon, UserIcon } from "@heroicons/react/24/outline";

import { generateAppUser } from '~/services/faker.server';
import SpojitiLogoUrl from '~/components/assets/SpojitiLogo.png';
import { Container } from '~/components/tailwindui/Container';
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline';

import { getUserId } from '~/services/session.server';
import { generateReviews } from '~/services/faker.server';
import ReviewCards, { type Review } from '~/components/tailwindui/sections/ReviewCard';
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
// import { Spinner } from "./Spinner"; // Assuming Spinner component is present
import React, { useState, useEffect } from 'react';
import type { LinksFunction, LoaderArgs } from "@remix-run/node";

// import type { Lang } from "~/models/langs.server";
import { generateUsers } from '~/services/faker.server';
// import { searchLangs } from "~/models/langs.server";
// import SearchPage from '~/components/SearchPage/Page';

import UsersList from '~/components/SearchPage/UsersList';
import LocalMap from '~/components/SearchPage/LocalMap';
import { SearchBar } from '~/components/SearchPage/SearchBar';
import type { User, State, Action } from '~/components/SearchPage/types';
import { geocode } from '~/services/mapbox.server';
import FilterMenu from '~/components/SearchPage/FilterMenu';

import {reducer, initialReducerState, SearchContext, type ISearchContext} from '~/context/search.context';

interface LoaderData {
  // TODO: replace with types from db
    users: User[];
    selectedUser?: string;
  };

  export const loader = async ({request}: LoaderArgs) => {
    // console.log(`Leaf Node Loader: /app/_index`);
    // const coords = await geocode('Hoboken New Jersey');
    // const geoResult = await coords.json();
    /*
    const userId = await getUserId(request);
    if (typeof userId === 'string') {
        console.log(`Current User ID: ${userId}`);
        console.log(`Redirecting to /app/dashboard/${userId}`);
        return redirect(`/app/dashboard/${userId}`);
    }
    */
    // console.log(`Current User ID: ${userId}`);

    const users: User[] = generateUsers(50);
    
  return json<LoaderData>({users})
  };

export default function AppDashboardIndexPage() {
  const [state, dispatch] = React.useReducer(reducer, initialReducerState);
  const { users } = useLoaderData<LoaderData>();
  // console.log(JSON.stringify(geoResult));
  // const [searchParams, setSearchParams] = useSearchParams();

  // const [state, dispatch] = React.useReducer(reducer, initialState);
/*
  const selectUser = (userId: string) => {
    setSearchParams([['selectedUser', userId]]);
  };
*/
  // TODO: Fetch users and handle loading and error states
  React.useEffect(() => {
    if (state.users.length < 1) {
      dispatch({ type: 'SET_USERS', payload: users});
    }
    if (state.selectedUser === null) {
      dispatch({type: 'SET_SELECTED_USER', payload: users[0]});
    };

    dispatch({type: 'SET_LOADING', payload: false});
    /*
    fetchUsers()
      .then(users => dispatch({ type: 'SET_USERS', payload: users }))
      .catch(error => dispatch({ type: 'SET_ERROR', payload: error }));
      */
  }, [users, state.selectedUser, state.users]);
/*
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    langs.load(`/lang-search?q=${e.target.value}`);
  };

  useEffect(() => {
    if (!selectedLang) {
      langs.load(`/lang-search?q=a`);
    }
  })
  */
  let location: [latitude: number, longitude: number] = [state.mapLocation.lat, state.mapLocation.lng];
  if (state.selectedUser) location = state.selectedUser.latLng
  
  return (
    <>
    {/*<div className="bg-transparent mt-8 border-2 border-solid border-black" />*/}
    <div className='w-full'>
    {/** TODO: use outlet context instead? */}
    <SearchContext.Provider value={[state, dispatch]}>
      <div className="flex">
        {state.loading && <p>Loading...</p>}
        {state.error && <p>Error: {state.error}</p>}
        {!state.loading && !state.error && (
          <>
            <div className="w-1/3 overflow-auto">
              <FilterMenu />
            </div>
            <div className="w-1/3 overflow-auto">
              <SearchBar term='' />
              <UsersList />
            </div>{/**if (state.selectedUser) {} */}
            <div className="w-1/3">
              {state.mapLocation && <LocalMap 
                selectedLocation={[state.mapLocation.lat, state.mapLocation.lng]} 
                onLocationChange={dispatch}
        />}
        {/*state.selectedUser && <LocalMap 
                selectedLocation={state.selectedUser.latLng} 
                onLocationChange={dispatch}
      />*/}
            </div>
          </>
        )}
      </div>
    </SearchContext.Provider>
    </div>
    </>
  )
};

export function useSearchContext(): ISearchContext {
  const [state, dispatch] = React.useContext(SearchContext);

  return [state, dispatch]
}

/*
<div className="bg-[#f58321] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-2 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-white">Adding Millions of New Jobs Daily</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
            It doesn't have to be hard!
          </p>
          <p className="mt-6 text-lg leading-8 text-white">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.

            
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-200">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                    <feature.icon className="h-6 w-6 text-gray-900" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-white">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    <Container type='grid' id="reviews" classNames="rounded-md">
        <div className="text-lg text-black bg-gray-100">
            <h3>Reviews for Guest</h3>
            <div className="bg-gray-100 container py-8">
            <ReviewCards reviews={reviews} />
            </div>
      {/<div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">/}
          {/*reviews.map((review) => (
            <div key={review.name} className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-md text-gray-600">{review.name}</dt>
            <dt className="text-md text-gray-600">{review.jobTitle}</dt>
            <dd className="order-first text-sm font-semibold tracking-tight text-gray-900 sm:text-sm">
              {review.quote}
            </dd>
          </div>
          ))/}
        {/*</dl>
      </div>/}
      </div>
      </Container>
      */