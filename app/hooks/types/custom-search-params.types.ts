import type * as React from 'react';
// T  extends {children?: any}

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

export type PrimitiveSearchParam = string | number | boolean;
export type SearchParamObjectType = { [key: string]: PrimitiveSearchParam | SearchParamObjectType }; // [string, PrimitiveSearchParam][]
export type CustomeSearchParamsProviderProps = React.PropsWithChildren<UseSearchParamsResult<SearchParamObjectType>>;


// export type SearchParamsActionType = 'change';

// const action: SearchParamsAction<typeof state> ...
export type SearchParamsAction<T> = {
  type: SearchParamsActionType;
  payload: Partial<T>;
};

export type SearchParamActionFunction<T> = (state: UseSearchParamsResult<T>, action: SearchParamsAction<T>) => T;

export type ActionMap<T> = Map<SearchParamsActionType, SearchParamActionFunction<T>>;

export type CreateUseSearchParamsContextResult<TValues> = {
  Provider: React.FC<TValues>;
  useValueSelector: <TSelected>(
    selector?: (key: string) => TSelected
  ) => TSelected;
  useDebouncedValueSelector: <TSelected>(
    selector?: (key: string) => TSelected,
    debounceMilliseconds?: number
  ) => TSelected;
  useSetValues: () => (
    input: ((values: TValues | null) => Partial<TValues>) | Partial<TValues>
  ) => void;
  useResetValues: () => void;
};

