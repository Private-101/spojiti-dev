import React, { type Reducer, useMemo, useState, useCallback, useEffect, useReducer, useRef, createContext, useContext } from 'react';
import { useSearchParams } from '@remix-run/react'
// import type { SearchParamType, ISearchContext } from "types/search.types";
/*************************************************************************************************/
import { setSearchParams, getSearchParams, objectDeepCopy } from 'hooks/utils';
import type { SearchParamsAction, SearchParamsActionType, UseSearchParamsConfig, UseSearchParamsResult, CreateUseSearchParamsContextResult, SearchParamObjectType, PrimitiveSearchParam, CustomeSearchParamsProviderProps } from 'hooks/types';
import { debounce } from 'lodash';

type SearchParamsContextProviderProps = {
  defaultParams?: URLSearchParams;
  children: React.ReactNode;
};

// export type SearchParamType<T> = { [key: string]: T };


export interface ISearchContext {
  params: URLSearchParams;
  updateParams: (queryKey: string, queryValue?: string) => void;
  resetParams: () => void;
};

const SearchContext = createContext<ISearchContext | null>(null);

export const SearchContextProvider: React.FC<SearchParamsContextProviderProps> = ({defaultParams, children}) => {
  // const [searchParams, setSearchParams] = useSearchParams();

  const getParams = useCallback((key?: string) => {
    const currentSearchParams = new URLSearchParams(window.location.search);
    if (!key) {
      return currentSearchParams;
    };
    return currentSearchParams.get(key);
  }, [key]);

  const updateParams = useCallback((key: string, value?: string) => {
      const currentSearchParams = new URLSearchParams(window.location.search);
      const oldValue = currentSearchParams.get(key) ?? '';
      // const oldValue = getParams(key) ?? '';
    
      if (value === oldValue) return

      if (value) {
        currentSearchParams.set(key, value)
      } else {
        currentSearchParams.delete(key)
      }
      const newUrl = [window.location.pathname, currentSearchParams.toString()]
        .filter(Boolean)
        .join('?')
    // alright, let's talk about this...
    // Normally with remix, you'd update the params via useSearchParams from react-router-dom
    // and updating the search params will trigger the search to update for you.
    // However, it also triggers a navigation to the new url, which will trigger
    // the loader to run which we do not want because all our data is already
    // on the client and we're just doing client-side filtering of data we
    // already have. So we manually call `window.history.pushState` to avoid
    // the router from triggering the loader.
      window.history.replaceState(null, '', newUrl)
    }, [key, value]);
  };

  const resetParams = useCallback(() => {
    if (defaultParams) {
      Array.from(defaultParams.entries()).forEach(([key, value]) => updateParams(key, value));
    } else {
      const currentSearchParams = new URLSearchParams(window.location.search);
      currentSearchParams.keys().forEach((key) => updateParams(key));
    };
  }, []);

  useEffect(() => {
    if (defaultParams) {
      Array.from(defaultParams.entries()).forEach(([key, value]) => updateParams(key, value));
    };
  }, [defaultParams]);

  
  return (
    <SearchContext.Provider value={{params: getParams(), updateParams, resetParams}}>
      {children}
    </SearchContext.Provider>
  )
};

export function useSearchContext() {
  return useContext<ISearchContext>(SearchContext);
};


