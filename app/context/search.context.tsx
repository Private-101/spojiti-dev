import React, { type Reducer, useMemo, useState, useCallback, useEffect, useReducer, useRef, createContext, useContext } from 'react';
import { useSearchParams } from '@remix-run/react'
import type { SearchParamType, ISearchContext } from "types/search.types";
/*************************************************************************************************/
import { setSearchParams, getSearchParams, objectDeepCopy } from 'hooks/utils';
import type { SearchParamsAction, SearchParamsActionType, UseSearchParamsConfig, UseSearchParamsResult, CreateUseSearchParamsContextResult, SearchParamObjectType, PrimitiveSearchParam, CustomeSearchParamsProviderProps } from 'hooks/types';
import { debounce } from 'lodash';


// export type SearchParamType<T> = { [key: string]: T };

/*
export interface ISearchContext {
  results: SearchParamType;
  setResults: (results: SearchParamType) => void;
  resetValues: () => void;
}
*/

export const defaultValue: ISearchContext = {
  results: [],
  setResults: () => {},
  resetValues: () => {}
};

const SearchContext = React.createContext<ISearchContext>(defaultValue);

const SearchContextProvider: React.FC<{}> = (props) => {}

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