import React, { useReducer, createContext, useContext } from 'react';

interface IPerson {
    age: number;
    firstName: string;
    lastName: string;
};

interface State {
    count: number;
    person: IPerson;
};

const initialState: State = {
  count: 0,
  person: {
    age: 0,
    firstName: '',
    lastName: '',
  },
};

// type State = typeof initialState;

type Action =
  | { type: 'increment' }
  | { type: 'incrementBy'; payload: { x: number } }
  | { type: 'decrement' }
  | { type: 'decrementBy'; payload: { x: number } }
  | { type: 'setFirstName'; payload: { firstName: string } }
  | { type: 'setLastName'; payload: { lastName: string } }
  | { type: 'setAge'; payload: { age: number } }
  | { type: 'resetCount' }
  | { type: 'resetPerson' }
  | { type: 'resetAll' }

type Dispatch = (action: Action) => void;

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'increment': return {
      ...state,
      count: state.count + 1,
    };
    case 'incrementBy': return {
        ...state,
        count: state.count + action.payload.x
    };
    case 'decrement': return {
      ...state,
      count: state.count - 1,
    };
    case 'decrementBy': return {
        ...state,
        count: state.count - action.payload.x
    };
    case 'setFirstName': return {
      ...state,
      person: {
        ...state.person,
        firstName: action.payload.firstName,
      },
    };
    case 'setLastName': return {
      ...state,
      person: {
        ...state.person,
        lastName: action.payload.lastName,
      },
    };
    case 'setAge': return {
      ...state,
      person: {
        ...state.person,
        age: action.payload.age,
      },
    };
    case 'resetCount': return {
        ...state,
        count: initialState.count
    };
    case 'resetPerson': return {
        ...state,
        person: initialState.person
    };
    case 'resetAll': return initialState;
    default:
        return state;
      // throw new Error('unknown action type');
  }
};

// export const useValue = () => useReducer(reducer, initialState);

// export const MyContext = createContext<[State, Dispatch]>([initialState, () => null]);

/*
React Hook "useReducer" cannot be called at the top level. React Hooks must be called in a React function component or a custom React Hook function.eslintreact-hooks/rules-of-hooks
(alias) useReducer<(state: State, action: Action) => State>(reducer: (state: State, action: Action) => State, initialState: State, initializer?: undefined): [State, React.Dispatch<Action>] (+4 overloads)
import useReducer
An alternative to useState.

useReducer is usually preferable to useState when you have 
complex state logic that involves multiple sub-values. 
It also lets you optimize performance for components that 
trigger deep updates because you can pass dispatch down instead of callbacks.

@version — 16.8.0
@see — https://react.dev/reference/react/useReducer
*/
// export const [demoState, demoDispatch] = useReducer(reducer, initialState);

// export const MyDemoContext = createContext<[State, Dispatch]>([initialState, () => null]);
// export const MyDemoContext = createContext(initialState);
export const DemoProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    // const MyContext = useContext(MyDemoContext);
    const MyDemoContext = createContext<[State, Dispatch]>([initialState, () => null]);
    const values = useContext<[State, Dispatch]>(MyDemoContext)
    return (
        <MyDemoContext.Provider value={values}>
            {children}
        </MyDemoContext.Provider>
    );
};
