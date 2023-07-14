import { useEffect, useState } from 'react';

type SetValue<T> = T | ((val: T) => T);

/**
 * A hook that allows you to store and retrieve values in local storage,
 * and automatically updates the stored value when it changes.
 *
 * @param {string} key - The key under which the value will be stored in local storage.
 * @param {T} initialValue - The initial value to use if there is no existing value in local storage.
 * @return {[T, (value: SetValue<T>) => void]} An array containing the stored value and a function to update it.
 */
function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: SetValue<T>) => void] {
  // State to store our value
  // Pass  initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window !== 'undefined' && 'localStorage' in window) {
      try {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        // If error also return initialValue
        console.log(error);
        return initialValue;
      }
    };
    // window is undefined
    return initialValue;
  });

  // useEffect to update local storage when the state changes
  useEffect(() => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        typeof storedValue === 'function'
          ? storedValue(storedValue)
          : storedValue;
      // Save state
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;