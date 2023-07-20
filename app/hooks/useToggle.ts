import { useReducer } from 'react';

/**
 * The `useToggle` function is a TypeScript function that allows toggling between two options, with the
 * default options being `false` and `true`.
 * @param options - The `options` parameter is an optional array of values that the toggle can switch
 * between. By default, it is set to `[false, true]`.
 * @returns The function `useToggle` returns a tuple containing two elements. The first element is the
 * current option value, and the second element is a function to toggle the option value.
 */
export function useToggle<T = boolean>(options: readonly T[] = [false, true] as any) {
  const [[option], toggle] = useReducer((state: T[], action: React.SetStateAction<T>) => {
    const value = action instanceof Function ? action(state[0]) : action;
    const index = Math.abs(state.indexOf(value));

    return state.slice(index).concat(state.slice(0, index));
  }, options as T[]);

  return [option, toggle as (value?: React.SetStateAction<T>) => void] as const;
}