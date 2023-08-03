import React, { type Reducer, useMemo, useState, useCallback, useEffect, useReducer, useRef, createContext, useContext } from 'react';
import { setSearchParams, getSearchParams, objectDeepCopy } from 'hooks/utils';
import type { SearchParamsAction, SearchParamsActionType, UseSearchParamsConfig, UseSearchParamsResult, CreateUseSearchParamsContextResult, SearchParamObjectType, PrimitiveSearchParam, CustomeSearchParamsProviderProps } from 'hooks/types';
import { debounce } from 'lodash-es';

/*
interface Indexable<T extends Keys<Person>> {
  [key: string]: keyof T
};

interface Person {
  first: string;
  last?: string;
  age?: number;
  location?: {
    street: string;
    unit?: string | number;
    city: string
    state: string;
    zipCode: number;
  };
  isOnline: boolean;
  isSubscribed?: boolean;
};

const person: Indexable<keyof Person> = {
  name: "first",
  last: ""
}
*/

const currentSearchParamsUpdater: { id?: number } = {
  id: undefined,
};

//  extends {[key: string]: any}
export const useCustomSearchParams = <TValues extends SearchParamObjectType>(
  config?: UseSearchParamsConfig<TValues>
): UseSearchParamsResult<TValues> => {
  const id = useRef(Math.ceil(Math.random() * 9999));
  const initialStoreValue = useRef(
    config && !!config.sync
      ? getSearchParams() || config?.defaultValues || null
      : config?.defaultValues || null
  );

  const [state, dispatch] = useReducer<
    Reducer<TValues, SearchParamsAction<TValues>>
  >(searchParamsReducer, initialStoreValue.current || null);

  const setValues = useCallback(
    (
      input: ((values: TValues | null) => Partial<TValues>) | Partial<TValues>
    ) => {
      const payload = typeof input === 'function' ? input(state) : input;
      dispatch({ type: 'change', payload });
    },
    [state, dispatch]
  );

  const resetValues = useCallback(() => {
    dispatch({ type: 'change', payload: config?.defaultValues || {} });
  }, [dispatch, config?.defaultValues]);

  useEffect(() => {
    if (!config?.sync) return;
    if (currentSearchParamsUpdater.id) {
      console.error('You are using at least 2 contexts with flag sync as true');
    } else {
      currentSearchParamsUpdater.id = id.current;
    }
    return () => {
      if (!config?.sync) return;
    };
  }, [config?.sync]);

  useEffect(() => {
    if (typeof config?.sync !== 'undefined' && !config?.sync) return;
    if (
      !!currentSearchParamsUpdater.id &&
      currentSearchParamsUpdater.id !== id.current
    )
      return;
    setSearchParams({ ...state}, config?.omitEmpty);
  }, [state, config?.sync, config?.omitEmpty]);

  return {
    values: state,
    setValues,
    resetValues,
  };
};


export const searchParamsReducer = <T extends CustomSearchParamType>(
  state: T,
  action: SearchParamsAction<T>
) => {
  const actions: {
    [key in SearchParamsActionType]: () => T;
  } = {
    change: () =>
      objectDeepCopy({
        ...state,
        ...action.payload,
      }),
  };
  if (!actions[action.type]) throw new Error();
  return actions[action.type] && actions[action.type]();
};
//  extends {children?: any}
/*
export function createSearchParamsContext<TValues extends CustomSearchParamType>(
    config: UseSearchParamsConfig<TValues>
  ): CreateUseSearchParamsContextResult<TValues> {
    const Context = createContext<UseSearchParamsResult<TValues>>({
      values: config.defaultValues || null,
      setValues: () => null,
      resetValues: () => null,
    });
  
    const useValueSelector = (
      selector?: (state: TValues) => Partial<TValues>
      // selector?: string
      // selector?: <TValues extends {}>(key: string) => Partial<TValues>
    ): Partial<TValues> | undefined => {
        const ctx = useContext<UseSearchParamsResult<TValues>>(Context);
        const selected = ctx.values ? selector ? selector(ctx.values) : ctx.values : undefined;
        return selected;
      // return useContextSelector(Context, (s) =>
        // !selector ? s.values : selector(s.values as TValues)
     //  );
    };
  
    const useDebouncedValueSelector = (
      selector?: (state: TValues) => Partial<TValues>,
      debounceMilliseconds?: number
    ): Partial<TValues> | undefined => {
      // const value = useContextSelector(Context, (s) =>
        // !selector ? s.values : selector(s.values as TValues)
      // );
      const ctx = useContext<UseSearchParamsResult<TValues>>(Context);
      const value = ctx.values ? selector ? selector(ctx.values) : ctx.values : undefined;
  
      const [debouncedValues, setDebouncedValues] = useState(value);
  
      const debounced = useRef(
        debounce((params) => {
          return setDebouncedValues(params);
        }, debounceMilliseconds || 500)
      );
  
      useEffect(() => {
        debounced.current(value);
      }, [value]);
  
      return useMemo(() => debouncedValues, [debouncedValues]);
    };
  
    const useSetValues = () => {
      const ctx = useContext<UseSearchParamsResult<TValues>>(Context);
      return ctx.setValues;
      // return useContextSelector(Context, (s) => s.setValues);
    };
  
    const useResetValues = () => {
      const ctx = useContext<UseSearchParamsResult<TValues>>(Context);
      return ctx.resetValues;
      // return useContextSelector(Context, (s) => s.resetValues);
    };
// : React.PropsWithChildren<UseSearchParamsResult<TValues>>
    const SearchParamsProvider: React.FC<CustomeSearchParamsProviderProps> = (props) => {
      const searchQueryHook = useSearchParams(config);
      return (
        <Context.Provider value={searchQueryHook}>
            {props.children}
          </Context.Provider>
      )
    }
  
    return {
      // temp: React.createElement(React.Fragment, props)
      Provider: SearchParamsProvider,
      useValueSelector,
      useDebouncedValueSelector,
      useSetValues,
      useResetValues,
    };
  }
*/
// : CreateUseSearchParamsContextResult<TValues>
export function createSearchParamsContext<TValues extends CustomSearchParamType>(
  config: UseSearchParamsConfig<TValues>
) {
  const Context = createContext<UseSearchParamsResult<TValues>>({
    values: config.defaultValues || null,
    setValues: () => null,
    resetValues: () => null,
  });

  const SearchParamsProvider: React.FC<CustomeSearchParamsProviderProps> = (props) => {
    const searchQueryHook = useSearchParams(config);
    return (
      <Context.Provider value={searchQueryHook}>
          {props.children}
        </Context.Provider>
    )
  };



}
const Context = createContext<UseSearchParamsResult<CustomSearchParamType>>({
  values: config.defaultValues || null,
  setValues: () => null,
  resetValues: () => null,
});

const useValueSelector = (
  selector?: (key: string) => Partial<TValues>
  // selector?: string
  // selector?: <TValues extends {}>(key: string) => Partial<TValues>
): Partial<TValues> | undefined => {
    const ctx = useContext<UseSearchParamsResult<TValues>>(Context);
    const selected = ctx.values ? selector ? selector(ctx.values) : ctx.values : undefined;
    return selected;
  // return useContextSelector(Context, (s) =>
    // !selector ? s.values : selector(s.values as TValues)
 //  );
};

const useDebouncedValueSelector = (
  selector?: (state: TValues) => Partial<TValues>,
  debounceMilliseconds?: number
): Partial<TValues> | undefined => {
  // const value = useContextSelector(Context, (s) =>
    // !selector ? s.values : selector(s.values as TValues)
  // );
  const ctx = useContext<UseSearchParamsResult<TValues>>(Context);
  const value = ctx.values ? selector ? selector(ctx.values) : ctx.values : undefined;

  const [debouncedValues, setDebouncedValues] = useState(value);

  const debounced = useRef(
    debounce((params) => {
      return setDebouncedValues(params);
    }, debounceMilliseconds || 500)
  );

  useEffect(() => {
    debounced.current(value);
  }, [value]);

  return useMemo(() => debouncedValues, [debouncedValues]);
};

const useSetValues = () => {
  const ctx = useContext<UseSearchParamsResult<TValues>>(Context);
  return ctx.setValues;
  // return useContextSelector(Context, (s) => s.setValues);
};

const useResetValues = () => {
  const ctx = useContext<UseSearchParamsResult<TValues>>(Context);
  return ctx.resetValues;
  // return useContextSelector(Context, (s) => s.resetValues);
};












