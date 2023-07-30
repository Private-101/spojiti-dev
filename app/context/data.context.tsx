import { 
    createContext, type Dispatch, type SetStateAction, 
    useContext, useState, useReducer, type ReducerAction, 
    type Reducer, type ReducerState, type ReducerStateWithoutAction, 
    type ReducerWithoutAction 
} from 'react';
import type { FilterFn, BlankVoidFn, SortOption } from './filters/filter.types';
import { normalize, validate } from './filters/utils';
// import type { GraphData, GraphSettings } from './types'
// import { useGraphSetting } from './useGraphSetting'

type DispatchSettings = ReturnType<typeof useReducer>[1]

type LocalFilterFn<T> = (item: T, index: number, ctx: LocalFilterContext<T>) => boolean
type LocalFilterContext<T> = React.Context<T>;
type FilterItems<T> = Record<string, LocalFilterFn<T>>;
function genericSearch<T>(object: T, properties: Array<keyof T>, query: string): boolean {
    return false;
}
/* const Filters: FilterItems<string> = {
    byId: (item, index, ctx) => item && item.id ? validate(item.id) ? normalize(item.id).includes(normalize(term)) : false : false;
}; */

interface IDataContextType<T> {
  data?: Array<T>;
  setData: Dispatch<SetStateAction<Array<T> | undefined>>;

  selectedItemIndex?: number;
  setSelectedItemIndex: Dispatch<SetStateAction<number | undefined>>;

  searchTerm?: string;
  setSearchTerm: Dispatch<SetStateAction<string | undefined>>;
  filterSearch: FilterFn<T>;

  filters?: Set<FilterFn<T>>;
  /*
  // helper function
  function validate(value: unknown): value is string => !!value && value.toLowercase instanceof Function && typeof value === 'string' && value.length > 0;
    examples of filter functions:
    // item.id: string;
    const byId: FilterFn = <IMockItem>(item, index) => item && item.id ? validate(item.id) ? normalize(item.id).includes(normalize(serchTerm)) : false : false;
  */
  addFilter: (filter: FilterFn<T>) => void;
  clearFilters: BlankVoidFn;

  selectedSortOption: SortOption;
  setSelectedSortOption: Dispatch<SetStateAction<SortOption | undefined>>;
  
}

const DataContext = createContext<IDataContextType<unknown> | undefined>(undefined)

interface IDataProvider<T> {
    children: React.ReactNode;
    [key: string]: unknown
}
export function DataProvider<T extends unknown>(props: IDataProvider<T>) {
  const { children, ...rest } = props;
  /*
data?: Array<T>;
  setData: Dispatch<SetStateAction<Array<T> | undefined>>;

  selectedItemIndex?: number;
  setSelectedItemIndex: Dispatch<SetStateAction<number | undefined>>;

  searchTerm?: string;
  setSearchTerm: Dispatch<SetStateAction<string | undefined>>;
  filterSearch: FilterFn<T>;

  filters?: Set<FilterFn<T>>;
  
    addFilter: (filter: FilterFn<T>) => void;
    clearFilters: BlankVoidFn;
  
    selectedSortOption: SortOption;
    setSelectedSortOption: Dispatch<SetStateAction<SortOption | undefined>>;
  }
  */

  const [data, setData] = useState<T | undefined>(undefined);

  // const [settings, dispatchSettings] = useGraphSetting()

  // const firstYear = graphData?.contributionYears.at(-1)?.toString()
  // const lastYear = graphData?.contributionYears.at(0)?.toString()

  return (
    <DataContext.Provider
      value={}
    >
        {(data) =>}
      {children}
    </DataContext.Provider>
  )
}

export function useData() {
  return useContext(Setting)
}