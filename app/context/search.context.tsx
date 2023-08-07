import React, { type Reducer, useMemo, useState, useCallback, useEffect, useReducer, useRef, createContext, useContext } from 'react';
import { useSearchParams } from '@remix-run/react'
// import type { SearchParamType, ISearchContext } from "types/search.types";
/*************************************************************************************************/
import { setSearchParams, getSearchParams, objectDeepCopy } from 'hooks/utils';
import type { SearchParamsAction, SearchParamsActionType, UseSearchParamsConfig, UseSearchParamsResult, CreateUseSearchParamsContextResult, SearchParamObjectType, PrimitiveSearchParam, CustomeSearchParamsProviderProps } from 'hooks/types';
import { debounce } from 'lodash';

type SearchParamsContextProviderProps = {
  children: React.ReactNode;
};
// export type SearchParamType<T> = { [key: string]: T };


export interface ISearchContext {
  params: URLSearchParams;
  setParams: (params: URLSearchParams) => void;
  resetParams: () => void;
}

/*
export const defaultValue: ISearchContext = {
  results: [],
  setResults: () => {},
  resetValues: () => {}
};
*/

const SearchContext = React.createContext<ISearchContext | null>(null);

export const SearchContextProvider: React.FC<SearchParamsContextProviderProps> = ({children}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams;
  const setParams = (params: URLSearchParams) => {
    setSearchParams(params);
  };

  const resetParams = () => setSearchParams([]);
  return (
    <SearchContext.Provider value={{params, setParams, resetParams}}>
      {children}
    </SearchContext.Provider>
  )
}

// export const ContextProvider = appContext.Provider;
// export const ContextConsumer = appContext.Consumer;

// export interface IWithContextProps {
  // context: IAppContext;
// }

/* export function withContext<P extends {}>(
  ComposedComponent: React.ComponentType<P>
): React.ComponentClass<P> {
  return class WithContext extends React.Component<P> {
    public render(): React.ReactNode {
      return (
        <ContextConsumer>
          {context => <ComposedComponent {...this.props} context={context} />}
        </ContextConsumer>
      );
    }
  };
} */

/*
import React, { useState } from "react";

type NavigationContextProviderProps = {
  children: React.ReactNode;
};

const defaultContext = {
  isSidebarCollapsed: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleSidebar: () => {},
};

export const NavigationContext = React.createContext(defaultContext);

export function NavigationProvider({
  children,
}: NavigationContextProviderProps) {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(
    defaultContext.isSidebarCollapsed
  );

  return (
    <NavigationContext.Provider
      value={{
        isSidebarCollapsed,
        toggleSidebar: () => setSidebarCollapsed((isCollapsed) => !isCollapsed),
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}
*/