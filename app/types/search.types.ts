import type * as React from 'react';

export type PrimitiveSearchParam = string | number | boolean;
export type SearchParamObjectType = { [key: string]: PrimitiveSearchParam | SearchParamObjectType }; // [string, PrimitiveSearchParam][]
export type CustomeSearchParamsProviderProps = React.PropsWithChildren<UseSearchParamsResult<SearchParamObjectType>>;

export type SearchParamType = string | Record<string, string | ReadonlyArray<string>> | Iterable<[string, string]> | ReadonlyArray<[string, string]>;

export interface ISearchContext {
    results: SearchParamType;
    setResults: (results: SearchParamType) => void;
    resetValues: () => void;
  }

  /*************************************************************************************************/
  /*************************************************************************************************/
  /*************************************************************************************************/

  export type UseSearchParamsConfig<T> = {
    defaultValues?: T;
    sync?: boolean; // default true
    omitEmpty?: boolean; // default false
  };
  
  export type UseSearchParamsResult<T> = {
    values: T | null;
    setValues: (input: ((values: T | null) => Partial<T>) | Partial<T>) => void;
    resetValues: () => void;
  };
  

  export type SearchParamsActionType = 'change';

  // const action: SearchParamsAction<typeof state> ...
  export type SearchParamsAction<T> = {
    type: SearchParamsActionType;
    payload: Partial<T>;
  };
  
  export type SearchParamActionFunction<T> = (state: UseSearchParamsResult<T>, action: SearchParamsAction<T>) => T;
  
  export type ActionMap<T> = Map<SearchParamsActionType, SearchParamActionFunction<T>>;



// array, set, weakset, map, weakmap, promise.all, promise.race
// interface PromiseConstructor {
    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An iterable of Promises.
     * @returns A new Promise.
     */
    // all<T>(values: Iterable<T | PromiseLike<T>>): Promise<Awaited<T>[]>;

    /**
     * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
     * or rejected.
     * @param values An iterable of Promises.
     * @returns A new Promise.
     */
    // race<T>(values: Iterable<T | PromiseLike<T>>): Promise<Awaited<T>>;
// }
















