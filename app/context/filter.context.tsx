import React, { createContext, useState, useReducer } from "react";
import type { FilterFn, SortOption } from "./filters/filter.types";
// type FilterContextType = "light" | "dark";
// type Reducer<S, A> = (prevState: S, action: A) => S;

// https://stackblitz.com/edit/usereducer-typescript
// https://www.sumologic.com/blog/react-hook-typescript/
/*type State<T> =
 | { status: 'empty' }
 | { status: 'loading' }
 | { status: 'error', error: string }
 | { status: 'success', data: T }*/

 /*
items?: Array<T>;
loading: boolean;
selectedItemIndex?: number;
searchTerm?: string;
filters?: Set<FilterFn<T>>;
selectedSortOption: SortOption;

  setData: Dispatch<SetStateAction<Array<T> | undefined>>;
  setLoading: Dispatch<SetStateAction<boolean | undefined>>;
  setSelectedItemIndex: Dispatch<SetStateAction<number | undefined>>;
  setSearchTerm: Dispatch<SetStateAction<string | undefined>>;
  filterSearch: FilterFn<T>;
  addFilter: (filter: FilterFn<T>) => void;
  clearFilters: BlankVoidFn;
  setSelectedSortOption: Dispatch<SetStateAction<SortOption | undefined>>;
*/

type LoadingIndexType = {
  index: number;
  isLoading: boolean
};

type State<T> = {
  items?: Array<T>;
  loading: boolean;
  loadingIndex: LoadingIndexType;
  selectedItemIndex?: number;
  searchTerm?: string;
  filters?: Set<FilterFn<T>>;
  selectedSortOption: SortOption;
   };
const enum ActionEnum {
  SET_DATA = "SET_DATA",
  SET_LOADING = "SET_LOADING",
  SET_LOADING_INDEX = "SET_LOADING_INDEX",
  SET_SELECTED_ITEM_INDEX = "SET_SELECTED_ITEM_INDEX",
  SET_SEARCH_TERM = "SET_SEARCH_TERM",
  FILTER_SEARCH = "FILTER_SEARCH",
  ADD_FILTER = "ADD_FILTER",
  CLEAR_FILTERS = "CLEAR_FILTERS",
  SET_SELECTED_SORT_OPTION = "SET_SELECTED_SORT_OPTION"
};
type Action<T> =
 | { type: ActionEnum.SET_DATA; payload?: T[] }
 | { type: ActionEnum.SET_LOADING; payload?: boolean }
 | { type: ActionEnum.SET_LOADING_INDEX; payload?: LoadingIndexType }
 | { type: ActionEnum.SET_SELECTED_ITEM_INDEX; payload?: number }
 | { type: ActionEnum.SET_SEARCH_TERM; payload?: string }
 | { type: ActionEnum.FILTER_SEARCH }
 | { type: ActionEnum.ADD_FILTER; payload?: FilterFn<T> }
 | { type: ActionEnum.CLEAR_FILTERS }
 | { type: ActionEnum.SET_SELECTED_SORT_OPTION; payload?: SortOption }

 type ActionMap = Map<keyof typeof ActionEnum, React.Dispatch<Action<string>>>;

 const actions: ActionMap = new Map<ActionEnum, React.Dispatch<Action<string>>>();
 actions.set("SET_DATA", () => {});


/*
type Action<T> = 
 function reducer<T>(state: State<T>, action: Action<T>): State<T> {
  const ACTION_MAP = new Map<State<T>, Action<T>>([[]])
    switch (action.type) {
    case 'request':
    return { isLoading: true };
    case 'success':
    return { isLoading: false, data: action.results };
    case 'failure':
    return { isLoading: false, error: action.error };
    }
   }
*/
/*
   const [{
 data,
 isLoading,
 error
 }, dispatch] = useReducer(reducer, { isLoading: false });

 useEffect hook example
 useEffect(() => {
 let ignore = false;

 dispatch({ type: 'request' });
 axios(`https://hn.algolia.com/api/v1/search?query=${query}`).then(
 (results) => { if (!ignore) dispatch({ type: 'success', results: results.data }); },
 (error) => dispatch({ type: 'failure', error }),
 )

 return () => { ignore = true; }
 }, [query]);

  return (
 <div>
 <input value="{query}" onchange="{e" ==""> setQuery(e.target.value)} />
 {isLoading && <span>Loading...</span>}
 {error && <span>Error: {error}</span>}
 <ul>
 {data && data.hits && data.hits.map(item => (
 <li key="{item.objectID}">
 <a href="{item.url}">{item.title}</a>
 </li>
 ))}
 </ul>
 </div>
 
const FilterContext = createContext<FilterContextType>("light");
interface IFilterContextProviderProps {
    data: 
    children: React.ReactNode;
}
const FilterContextProvider: React.FC<IFilterContextProviderProps> = ({children}) => {
    const [filter, setFilter] = useState<FilterContextType>("light");
  
    return (
      <FilterContext.Provider value={theme}>
        {children}
      </FilterContext.Provider>
    );
  };


  
  import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "FILTER_CHANGED":
      return {
        ...state,
        filteredData: action.payload,
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    filteredData: [],
  });

  const handleFilterChanged = (event) => {
    dispatch({
      type: "FILTER_CHANGED",
      payload: event.target.value,
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter"
        onChange={handleFilterChanged}
      />
      <ul>
        {state.filteredData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
  */