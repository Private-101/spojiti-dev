import React, { createContext, useState, useReducer } from "react";

type FilterContextType = "light" | "dark";
// type Reducer<S, A> = (prevState: S, action: A) => S;
/*
https://stackblitz.com/edit/usereducer-typescript
https://www.sumologic.com/blog/react-hook-typescript/
type State =
 | { status: 'empty' }
 | { status: 'loading' }
 | { status: 'error', error: string }
 | { status: 'success', data: HNResponse }
type State<T> = {
    data?: T;
    isLoading: boolean;
    error?: string;
   };

   type Action<T> =
 | { type: 'request' }
 | { type: 'success', results: T }
 | { type: 'failure', error: string };

 function reducer(state: State, action: Action): State {
    switch (action.type) {
    case 'request':
    return { isLoading: true };
    case 'success':
    return { isLoading: false, data: action.results };
    case 'failure':
    return { isLoading: false, error: action.error };
    }
   }

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
 */
const FilterContext = createContext<FilterContextType>("light");
interface IFilterContextProviderProps {
    children: React.ReactNode;
}
const FilterContextProvider: React.FC<IFilterContextProviderProps> = ({children}) => {
    const [theme, setFilter] = useState<FilterContextType>("light");
  
    return (
      <FilterContext.Provider value={theme}>
        {children}
      </FilterContext.Provider>
    );
  };


  /*
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