// import type { SearchParamsAction, SearchParamsActionType, UseSearchParamsConfig, UseSearchParamsResult, CreateUseSearchParamsContextResult, SearchParamObjectType, PrimitiveSearchParam, CustomeSearchParamsProviderProps } from 'hooks/types';
import React, { type Reducer, useMemo, useState, useCallback, useEffect, useReducer, useRef, createContext, useContext } from 'react';
// import { setSearchParams, getSearchParams, objectDeepCopy } from 'hooks/utils';
import type { SearchParamsAction, SearchParamsActionType, UseSearchParamsConfig, UseSearchParamsResult, CreateUseSearchParamsContextResult, SearchParamObjectType, PrimitiveSearchParam, CustomeSearchParamsProviderProps } from 'hooks/types';
import { debounce } from 'lodash-es';
import { MdOutlineFormatColorReset } from 'react-icons/md';



type ExampleCategory = 'cat-1' | 'cat-2' | string;
type ExamplePosition = 'cook' | 'bar' | 'busser' | string;







type Dispatch = (action: Action) => void;



type UseSearchParamValuesFunction = (initialState: LocalSearchParamState) => [React.Provider<LocalSearchParamState>]

// Define the LocalSearchParamState type (replace any with the actual type)
type LocalSearchParamState = {
  query: string;
  categories: ExampleCategory[];
  date: string;
  positions: ExamplePosition[]
  reset: boolean
};

type SetQueryAction = { type: ActionTypeKey.SET_QUERY, payload: { query: string } };
type SetCategoriesAction = { type: ActionTypeKey.SET_CATEGORY, payload: { categories: string[] } };
type SetDateAction = { type: ActionTypeKey.SET_DATE, payload: { date: string } };
type SetPositionAction = { type: ActionTypeKey.SET_POSITION, payload: { positions: string[] } };
type SetResetAction = { type: ActionTypeKey.SET_RESET, payload: {} };

type Action =
  | SetQueryAction
  | SetCategoriesAction
  | SetDateAction
  | SetPositionAction
  | SetResetAction;

  type SearchParamActionFunction<T> = (ctx: LocalSearchParamState, action: T) => LocalSearchParamState;

// Define the actionMap type
type ActionMap = Map<ActionTypeKey, SearchParamActionFunction<any>>;

// Define the useSearchParamValues function

export const initialState: LocalSearchParamState = {
  query: '',
  categories: [],
  date: '',
  positions: [],
  reset: false
};

type SearchParamReducerFunction = (ctx: LocalSearchParamState, { type, payload }: Action) => LocalSearchParamState;
// defaultParams: LocalSearchParamState
export const useSearchParamValues = () => {
  const SearchContext = createContext<LocalSearchParamState>(initialState);
  // const ctx = useContext<LocalSearchParamState>(SearchContext);
  enum ActionTypeKey {
    SET_QUERY = 'Query',
    SET_CATEGORY = 'Categories',
    SET_DATE = 'Date',
    SET_POSITION = 'Positions',
    SET_RESET = 'Reset'
  };
  const setQuery: SearchParamActionFunction<SetQueryAction> = (ctx, {type = ActionTypeKey.SET_QUERY, payload}) => ({
    ...ctx,
    query: payload.query
  });
  const setCategories: SearchParamActionFunction<SetCategoriesAction> = (ctx, {type = ActionTypeKey.SET_CATEGORY, payload}) => ({
    ...ctx,
    categories: payload.categories
  });
  const setDate: SearchParamActionFunction<SetDateAction> = (ctx, {type = ActionTypeKey.SET_DATE, payload}) => ({
    ...ctx,
    date: payload.date
  });
  const setPositions: SearchParamActionFunction<SetPositionAction> = (ctx, {type = ActionTypeKey.SET_POSITION, payload}) => ({
    ...ctx,
    positions: payload.positions
  });
  const setReset: SearchParamActionFunction<SetResetAction> = (ctx, {type = ActionTypeKey.SET_RESET, payload = {}}) => ({
    ...initialState
  });
  const actionMap: ActionMap = new Map();
  actionMap.set(ActionTypeKey.SET_QUERY, setQuery);
  actionMap.set(ActionTypeKey.SET_CATEGORY, setCategories);
  actionMap.set(ActionTypeKey.SET_DATE, setDate);
  actionMap.set(ActionTypeKey.SET_POSITION, setPositions);
  actionMap.set(ActionTypeKey.SET_RESET, setReset);
  
  const searchparamReducer: SearchParamReducerFunction = (ctx: LocalSearchParamState, { type, payload }: Action) => {
      const mappedAction = actionMap.get(type);
      return mappedAction ? mappedAction(ctx, { type, payload } as Action) : ctx;
    };

    // const initReducerState: InitReducerFunction = (state) => state;
  // <LocalSearchParamState, Action>
  const [state, dispatch] = useReducer<SearchParamReducerFunction, LocalSearchParamState>(searchparamReducer, initialState, (state) => state);

  return { SearchContext, state, dispatch };
};
/*
function createActionMap() {
  Object.values(ActionTypeKey).map((action, i) => {
    `function set${action}: SearchParamActionFunction<Set${action}Action>`
  })
}
*/
/*
enum ActionTypeKey {
  SET_QUERY = 'query',
  SET_CATEGORY = 'categories',
  SET_DATE = 'date',
  SET_POSITION = 'positions',
  RESET = 'reset'
}

export type ISearchParamsAction = {
  type: ActionTypeKey;
  payload: LocalSearchParamState[ActionTypeKey]
};

type SetQueryAction = { type: ActionTypeKey.SET_QUERY, payload: { query: string } }
type SetCategoriesAction = { type: ActionTypeKey.SET_CATEGORY, payload: { categories: string[] } }
type SetDateAction = { type: ActionTypeKey.SET_DATE, payload: { date: string } }
type SetPositionAction = { type: ActionTypeKey.SET_POSITION, payload: { positions: string[] } }
type ResetAction = { type: ActionTypeKey.RESET }

type Action =
  | SetQueryAction
  | SetCategoriesAction
  | SetDateAction
  | SetPositionAction
  | ResetAction

type SearchParamActionFunction<T> = (ctx: LocalSearchParamState, action: T) => LocalSearchParamState;
type ActionMap = Map<ActionTypeKey, SearchParamActionFunction<Action>>;

export const useSearchParamValues = (defaultParams) => {
  const SearchContext = React.createContext<LocalSearchParamState>(defaultParams);
  
  const actionMap: ActionMap = new Map();

  const setQuery: SearchParamActionFunction<Action> = (ctx, action) => ({
    ...ctx,
    // ts error Property 'payload' does not exist on type 'Action'.
    // Property 'payload' does not exist on type 'ResetAction'.ts(2339)
      query: action.payload.query
  });

  actionMap.set(ActionTypeKey.SET_QUERY, setQuery)
}

[
  
    [ActionTypes.SET_QUERY, state => ({
      ...state,
      banner: getInitialState().banner,
    })],
  
    [actionTypes.BANNER_SHOW, (state, payload) => ({
      ...state,
      banner: payload,
    })],
  
  ]
  */


  /*
  onst ctx = useContext<LocalSearchParamState>(SearchContext);
  const reducer = (state: LocalSearchParamState, action: Action) => {
    switch (action.type) {
      case ActionTypeKey.SET_QUERY: return {
        ...state,
        query: action.payload.query
      };
      case ActionTypeKey.SET_CATEGORY: return {
        ...state,
        categories: action.payload.categories
      };
      case ActionTypeKey.SET_DATE: return {
        ...state,
        date: action.payload.date
      };
      case ActionTypeKey.SET_POSITION: return {
        ...state,
        positions: action.payload.positions
      };
      case ActionTypeKey.RESET: return initialState;
      default: return state; // throw new Error('unknown action type');
    };
  };

  const getActionMap = () => useReducer(reducer, initialState);
// Define SearchParamActionFunction type
// LocalSearchParamState & (SetQueryAction | SetCategoriesAction | SetDateAction | SetPositionAction | ResetAction)

  // Define the ActionTypeKey enum and other types


  type SetQueryAction = { type: ActionTypeKey.SET_QUERY, payload: { query: string } };
type SetCategoriesAction = { type: ActionTypeKey.SET_CATEGORY, payload: { categories: string[] } };
type SetDateAction = { type: ActionTypeKey.SET_DATE, payload: { date: string } };
type SetPositionAction = { type: ActionTypeKey.SET_POSITION, payload: { positions: string[] } };
type ResetAction = { type: ActionTypeKey.RESET, payload: {} };

*/

export const getSearchParams = (): Partial<SearchParamObjectType> | null => {
    if (typeof window === 'undefined' || !window.location.search) return null;
  
    const urlSearchQuery = new URLSearchParams(window.location.search);
  
    return Array.from(urlSearchQuery.entries()).reduce<{
      [key: string]: string | any;
    }>((acc, entry) => {
      const key = entry[0] || '';
      const value = decodeURIComponent(entry[1]);
  
      acc[key] = value;
      if (value.startsWith('{') || value.startsWith('[')) {
        acc[key] = JSON.parse(value);
      }
      if (value === 'true' || value === 'false') {
        acc[key] = Boolean(value === 'true');
      }
      return acc;
    }, {});
  };

  export const setSearchParams = <T extends SearchParamObjectType>(
  searchQueryData: T,
  omitEmpty?: boolean
): void => {
  if (typeof window === 'undefined') return;

  const searchQuery = new URLSearchParams();

  Object.entries(searchQueryData).forEach(([key, value]) => {
    if (
      typeof value === 'string' ||
      typeof value === 'boolean' ||
      typeof value === 'number'
    ) {
      if ((omitEmpty && !!String(value)) || !omitEmpty) {
        searchQuery.set(key, String(value));
      }
      return;
    }
    if ((omitEmpty && !!value) || !omitEmpty) {
      searchQuery.set(key, encodeURIComponent(JSON.stringify(value)));
    }
  });

  window.history.replaceState(
    {},
    '',
    `${window.location.origin}${
      window.location.pathname
    }?${searchQuery.toString()}`
  );
};

export const objectDeepCopy = <T extends {}>(data: T): T => {
  return JSON.parse(JSON.stringify(data));
};