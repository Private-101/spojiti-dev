import React, { useEffect, useState, useReducer } from 'react'
import { json, type LoaderArgs, type LinksFunction } from "@remix-run/node"; // or cloudflare/deno
import { useLoaderData, useFetcher } from "@remix-run/react";
import { Transition } from '@headlessui/react';
import { NavLink, useSearchParams } from '@remix-run/react';
import { Toast } from '~/components/common/Toast';
import { DropdownButton, DropdownButtonItem } from '~/components/playground/DropdownButton';
import { classNames } from '~/utils';
import Styles from '~/styles/pages.styles.css';

/*
interface UsePaginationProps { 
    countPerPage: number;
    totalCount: number; 
};
*/

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: Styles },
  ];

/*interface LoaderData {
    users: User[]
}; */

/* export const loader = async () => {
    const res = await fetch("https://random-data-api.com/api/v2/users?size=100&response_type=json");
  return json<LoaderData>(await res.json());
  };
*/
export default function PagesRoute() {
    // const {users} = useLoaderData<LoaderData>();
  const [searchParams, setSearchParams] = useSearchParams();
  // const fetcher = useFetcher<User[]>();
  const [people, setPeople] = useState<User[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  /* useEffect(() => {
    if (!loading) {
        return;
    };
    if (!people || !people.length) {
        if (fetcher.state === "idle" && fetcher.data == null) {
            fetcher.load("https://random-data-api.com/api/v2/users?size=100&response_type=json");
        } else if (fetcher.data && fetcher.data.length) {
            setPeople(fetcher.data);
            setLoading(false);
        }
    };
  }, [setLoading, people, loading, fetcher.data, fetcher.state, fetcher]) */
  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    gaps,
    setPage,
    totalPages,
  } = usePagination({
    countPerPage: 15,
    // TODO: hardcoded for now because I know how many I requested, but must fix issue eventually!
    totalCount: 100,
  });
   useEffect(() => {
    (async () => {
      try {
        const data = await fetch("https://random-data-api.com/api/v2/users?size=100&response_type=json");
        setPeople(data.json() as unknown as User[]);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []); 

    return (
        <>
        <div className="App">
      {/*<img src={logo} alt="react logo" />
      <h1 className="title">usePagination()</h1>*/}
      {loading ? (
        <h2>Loading...</h2>
      ) : error || !people && !loading ? (
        <h2>Error fetching users</h2>
      ) : (
        <>
          <div className="pagination">
            <p className="text">
              {page}/{totalPages}
            </p>
            <button
              onClick={prevPage}
              className={`page ${page === 1 && "disabled"}`}
            >
              &larr;
            </button>
            <button
              onClick={() => setPage(1)}
              className={`page ${page === 1 && "disabled"}`}
            >
              1
            </button>
            {gaps.before ? "..." : null}
            {/* @ts-ignore */}
            {gaps.paginationGroup.map((gap) => (
              <button
                onClick={() => setPage(gap)}
                key={gap}
                className={`page ${page === gap ? "active" : ""}`}
              >
                {gap}
              </button>
            ))}
            {gaps.after ? "..." : null}
            <button
              onClick={() => setPage(totalPages)}
              className={`page ${page === totalPages && "disabled"}`}
            >
              {totalPages}
            </button>
            <button
              onClick={nextPage}
              className={`page ${page === totalPages && "disabled"}`}
            >
              &rarr;
            </button>
          </div>
          <div className="items">
            {people && people
              .slice(firstContentIndex, lastContentIndex)
              .map((person) => (
                <div className="item" key={person.uid}>
                  <img
                    src={`https://avatars.dicebear.com/api/big-smile/${person.first_name}.svg`}
                    alt={`${person.username} profile`}
                    className="item__img"
                  />
                  <div className="item__info">
                    <p className="name">
                      {person.first_name} {person.last_name}{" "}
                      <span className="username">(@{person.username})</span>
                    </p>
                    <p className="job">{person.employment.title}</p>
                    <p
                      className={`status ${
                        person.subscription.status.toLowerCase() === "active"
                          ? "success"
                          : person.subscription.status.toLowerCase() === "blocked"
                          ? "danger"
                          : "warn"
                      }`}
                    >
                      {person.subscription.status}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
        </>
    )
};




/**
 * https://github.com/damiisdandy/use-pagination
 */
interface Gap {
  before: boolean;
  paginationGroup: number[];
  after: boolean;
};

interface UsePaginationReturnType {
    totalPages: number;
    nextPage: () => void;
    prevPage: () => void;
    setPage: (num: number) => void;
    firstContentIndex: number;
    lastContentIndex: number;
    page: number;
    gaps: Gap;
};

// : UsePagination
interface UsePaginationProps { 
    countPerPage: number;
    totalCount: number; 
};
const usePagination = ({ countPerPage, totalCount }: UsePaginationProps): UsePaginationReturnType => {
  const [page, setPage] = useState(1);
  // like 3 dots that surrounds the immediate pages
  const [gaps, setGaps] = useState<Gap>({
    before: false,
    paginationGroup: [],
    after: true,
  });
  // number of pages in total (total items / content on each page)
  const pageCount = Math.ceil(totalCount / countPerPage);
  // index of last item of current page
  const lastContentIndex = page * countPerPage;
  // index of first item of current page
  const firstContentIndex = lastContentIndex - countPerPage;
  //Pages between the first and last pages
  const [pagesInBetween, setPagesInBetween] = useState<number[]>([]);

  useEffect(() => {
    if (pageCount > 2) {
      const temp = new Array(pageCount - 2).fill(1).map((_, i) => i + 2);
      setPagesInBetween(temp);
    }
  }, [pageCount]);

  // to set the pages between the gaps depending on position of current page
  //and to setGaps Depending on position of current page
  useEffect(() => {
    const currentLocation = pagesInBetween.indexOf(page);
    let paginationGroup = [];
    let before = false;
    let after = false;
    if (page === 1) {
      paginationGroup = pagesInBetween.slice(0, 3);
    } else if (
      page === pageCount ||
      page === pageCount - 1 ||
      page === pageCount - 2
    ) {
      paginationGroup = pagesInBetween.slice(-3, pageCount);
    } else if (page === 2) {
      paginationGroup = pagesInBetween.slice(
        currentLocation,
        currentLocation + 3
      );
    } else {
      paginationGroup = [page - 1, page, page + 1];
    }
    if (pageCount <= 5) {
      before = false;
      after = false;
    } else {
      before = false;
      after = false;
      if (paginationGroup[0] > 2) {
        before = true;
      }
      if (paginationGroup[2] < pageCount - 1) {
        after = true;
      }
    }
    setGaps({ paginationGroup, before, after });
  }, [page, pagesInBetween, pageCount]);

  // change page based on direction either front or back
  const changePage = (direction: boolean) => {
    setPage((state) => {
      // move forward
      if (direction) {
        // if page is the last page, do nothing
        if (state === pageCount) {
          return state;
        }
        return state + 1;
        // go back
      } else {
        // if page is the first page, do nothing
        if (state === 1) {
          return state;
        }
        return state - 1;
      }
    });
  };

  const setPageSAFE = (num: number) => {
    // if number is greater than number of pages, set to last page
    if (num > pageCount) {
      setPage(pageCount);
      // if number is less than 1, set page to first page
    } else if (num < 1) {
      setPage(1);
    } else {
      setPage(num);
    }
  };

  return {
    totalPages: pageCount,
    nextPage: () => changePage(true),
    prevPage: () => changePage(false),
    setPage: setPageSAFE,
    firstContentIndex,
    lastContentIndex,
    page,
    gaps,
  };
};

interface Employment {
    title: string;
    key_skill: string;
  }
  
  interface Coordinates {
    lat: number;
    lng: number;
  }
  
  interface Address {
    city: string;
    street_name: string;
    street_address: string;
    zip_code: string;
    state: string;
    country: string;
    coordinates: Coordinates;
  }
  
  interface CreditCard {
    cc_number: string;
  }
  
  interface Subscription {
    plan: string;
    status: string;
    payment_method: string;
    term: string;
  }
  
  interface User {
    id: number;
    uid: string;
    password: string;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    avatar: string;
    gender: string;
    phone_number: string;
    social_insurance_number: string;
    date_of_birth: string;
    employment: Employment;
    address: Address;
    credit_card: CreditCard;
    subscription: Subscription;
  }
  