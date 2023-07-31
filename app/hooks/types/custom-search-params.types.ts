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
export type SearchParamObjectType<T extends PrimitiveSearchParam> = { [key: string]: T | SearchParamObjectType<T> }; // [string, PrimitiveSearchParam][]

export type CustomeSearchParamsProviderProps<T extends PrimitiveSearchParam> = React.PropsWithChildren<UseSearchParamsResult<SearchParamObjectType<T>>>;


export type SearchParamsActionType = string; // T extends { [key: string]: any } ? T[string] : T

// const action: SearchParamsAction<typeof state> ...
export type SearchParamsAction<T> = {
  type: string;
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

