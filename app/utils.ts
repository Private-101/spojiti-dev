import { useMatches } from "@remix-run/react";
import { useMemo } from "react";

import type { User } from "~/models/user.server";

const DEFAULT_REDIRECT = "/";

/**
 * This should be used any time the redirect path is user-provided
 * (Like the query string on our login/signup pages). This avoids
 * open-redirect vulnerabilities.
 * @param {string} to The redirect destination
 * @param {string} defaultRedirect The redirect to use if the to is unsafe.
 */
export function safeRedirect(
  to: FormDataEntryValue | string | null | undefined,
  defaultRedirect: string = DEFAULT_REDIRECT
) {
  if (!to || typeof to !== "string") {
    return defaultRedirect;
  }

  if (!to.startsWith("/") || to.startsWith("//")) {
    return defaultRedirect;
  }

  return to;
}

/**
 * This base hook is used in other hooks to quickly search for specific data
 * across all loader data using useMatches.
 * @param {string} id The route id
 * @returns {JSON|undefined} The router data or undefined if not found
 */
export function useMatchesData(
  id: string
): Record<string, unknown> | undefined {
  const matchingRoutes = useMatches();
  const route = useMemo(
    () => matchingRoutes.find((route) => route.id === id),
    [matchingRoutes, id]
  );
  
  if (!route) return undefined;
  return route.data;
};

export function useRootLoaderData<TLoaderData extends Record<string, unknown>>() {
  return useMatchesData('root') as TLoaderData;
}

function isUser(user: any): user is User {
  return user && typeof user === "object" && typeof user.email === "string";
}

export function useOptionalUser(): User | undefined {
  const data = useMatchesData("__auth");
  if (!data || !isUser(data.user)) {
    return undefined;
  }
  return data.user;
}

export function useUser(): User {
  const maybeUser = useOptionalUser();
  if (!maybeUser) {
    throw new Error(
      "No user found in root loader, but user is required by useUser. If user is optional, try useOptionalUser instead."
    );
  }
  return maybeUser;
}

export function validateEmail(email: unknown): email is string {
  return typeof email === "string" && email.length > 3 && email.includes("@");
}

export async function safeTry<T>(fn: (args?: any[]) => T, args?: any[]): Promise<T> {
    return new Promise((resolve, reject) => {
      try {
        if (args && args.length > 0) {
          const result = fn(...args);
          resolve(result);
        } else {
          const result = fn();
          resolve(result);
        }
      } catch (error) {
        console.error(error);
        reject(error);
        // handle error...
      }
    });
  }
  
  /**
   * @example
   * const fn = () => getUser();
   * const user = await safeTry<User>(fn); // Calling with zero arguments
   * // Alternatively, you can provide an empty array
  const user = await safeTry<User>(fn, []); // Calling with an empty array
  So, whether you call safeTry without passing any arguments or with an empty array, it will handle the case correctly.
   */
  

/**
 * Converts a string into a URL-friendly string (also known as a "slug").
 * @param str - The string to be converted.
 */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')       // Replace spaces with -
    .replace(/&/g, '-and-')     // Replace & with 'and'
    .replace(/[^\w\-]+/g, '')   // Remove all non-word characters except -
    .replace(/\-\-+/g, '-')     // Replace multiple - with single -
    .replace(/^-+/, '')         // Trim - from start of text
    .replace(/-+$/, '');        // Trim - from end of text
}

/**
 * Capitalizes the first letter of a string.
 * @param str - The string to be capitalized.
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}


/**
 * The `titleCase` function takes a string as input and returns the same string with the first letter
 * of each word capitalized.
 * @param {string} str - The `str` parameter is a string that represents the input sentence or phrase
 * that you want to convert to title case.
 * @returns a string that has been converted to title case.
 */
export function titleCase(str: string): string {
  return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

/**
 * The unslugify function converts a slug string to a human-readable string by replacing hyphens with
 * spaces and capitalizing the first letter of each word.
 * @param {string} str - The `str` parameter is a string that represents a slug. A slug is a
 * URL-friendly version of a string, typically used in URLs to represent a page or resource. It usually
 * consists of lowercase letters, numbers, and hyphens.
 * @returns a string that has been unslugified.
 */
export function unslugify(str: string): string {
  return str.toLowerCase().split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

/**
 * The `classNames` function takes in an array of strings and returns a single string with all
 * non-empty strings joined together with a space separator.
 * @param {string[]} classes - The `classes` parameter is a rest parameter that allows you to pass in
 * any number of string arguments. These arguments represent CSS class names that you want to combine
 * into a single string.
 * @returns a string that is the result of joining all the non-empty strings in the `classes` array
 * with a space character.
 */


type AllowedClassNameTypes = ObjectBooleanFilterType[] | string[];
/**
 * The `classNames` function takes in a set of class names and returns a string of combined class
 * names, filtering out any falsy values.
 * @param {AllowedClassNameTypes} classes - The `classes` parameter is the input that contains the
 * class names to be combined and filtered. It can be of type `AllowedClassNameTypes`, which is a
 * custom type that specifies the allowed types for class names.
 * @returns a string that is the combination of all the truthy values from the `objects` and `strings`
 * arrays, joined together with a space separator.
 */
/* export function classNames(...classes: AllowedClassNameTypes) {
  const { strings, objects } = classNameFilter(classes, {throwOnError: false});
  let combined = filterTruthyValues(objects, strings);

  return combined.filter(Boolean).join(' ')
}; */

export function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
};

/**
 * @description
 * The filterStringsAndObjects function iterates through the input array and checks the type of each item. 
 * If it's a string, it adds it to the strings array; if it's an object, it adds it to the objects array. 
 * Finally, it returns an object containing both arrays.
 * 
 * @example
 * const mixedArray: (string | { [key: string]: boolean })[] = ["apple", { banana: true }, "orange", { mango: false }, "grape"];
 * 
 * const { strings, objects } = filterStringsAndObjects(mixedArray);
 * 
 * console.log("Strings:", strings); // Output: ["apple", "orange", "grape"]
 * console.log("Objects:", objects); // Output: [{ banana: true }, { mango: false }]
 * 
 */
  type ObjectBooleanFilterType = { [key: string]: boolean };
  type AllowedInputTypes = Array<string | ObjectBooleanFilterType> | string | ObjectBooleanFilterType;
  interface ObjectFilterFunctionOptions {
    throwOnError?: boolean;
  }
function classNameFilter(input: AllowedInputTypes, {throwOnError = false}: ObjectFilterFunctionOptions): { strings: string[], objects: ObjectBooleanFilterType[] } {
  const strings: string[] = [];
  const objects: { [key: string]: boolean }[] = [];

  if (Array.isArray(input)) {
    input.forEach(item => {
      if (typeof item === 'string') {
        strings.push(item);
      } else if (typeof item === 'object') {
        objects.push(item);
      } else {
        console.warn(`item of type ${typeof item} is not allowed!`);
        if (throwOnError) throw new Error('classNames boolean function: invalid inputs!');
        console.warn('classNames boolean function: invalid inputs!');
      }
    });
  } else {
    if (typeof input === 'string') {
      strings.push(input);
    } else if (typeof input === 'object') {
      objects.push(input);
    } else {
      console.warn(`input of type ${typeof input} is not allowed!`);
      if (throwOnError) throw new Error('classNames boolean function: invalid inputs!');
      console.warn('classNames boolean function: invalid inputs!');
    }
  };

  // const flattenObjects = objects.filter((_, idx) => objects[idx].key == true)

  return { strings, objects };
};

/**
 * @description
 * The filterTruthyValues function iterates through the array of objects and checks each key-value pair. 
 * If the value is true, it pushes the key (string) to the truthyValues array. 
 * Finally, it returns the array containing the truthy values.
 * 
 * @example
 * const isActive = true;
 * const isVisable = false;
 * const isDarkMode = true;
 * const data: { [key: string]: boolean }[] = [
  { "border border-blue-400": isActive === true },
  { "hidden": isVisible === false },
  { "flex": isVisible === true },
  { "bg-white": isDarkMode === fale },
  { "bg-black": isDarkMode === true }
];


const truthyValues = filterTruthyValues(data);
console.log(truthyValues); // Output: ["border border-blue-400", "hidden", "bg-black"]
console.log(truthyValues.join(" ")); // Output: "border border-blue-400 hidden bg-black"

const isActive = true;
  const isVisable = false;
  const isDarkMode = true;
  // const data: { [key: string]: boolean }[]
  
  const data = [
  { "border border-blue-400": isActive === true },
  { "hidden": isVisible === false },
  { "flex": isVisible === true },
  { "bg-white": isDarkMode === false },
  { "bg-black": isDarkMode === true }
];
  
const data = {
  hello: isActive, 
    goodbye: !isDarkMode || isVisable,
    world: !isVisable
  // world: isVisible == false !Error! for false, use !isVisible instead
};


const entries = Object.entries(data);
const arr = [];
entries.map(([key, val], idx) => {
  if (val == false) return;
  if (val == true) 
  return arr.push(key)
})

const title = document.getElementById('title');
title.innerText = arr.join(" ") // => hello world
 */
function filterTruthyValues(obj: ObjectBooleanFilterType | ObjectBooleanFilterType[], str: string | string[]): string[] {
  let truthyValues: string[] = [];

  if (Array.isArray(obj)) {
    obj.forEach(o => {
      for (const key in o) {
        if (o[key]) {
          truthyValues.push(key);
        }
      }
    });
  } else {
    for (const key in obj) {
      if (obj[key]) {
        truthyValues.push(key);
      }
    }
  };

  if (Array.isArray(str)) {
    truthyValues.concat(str);
  } else {
    truthyValues.push(str);
  }

  return truthyValues;
}

export function isValidTheme(theme: string): boolean {
  return theme === 'light' || theme === 'dark';
}

/**
 * The function `isValidHexColor` checks if a given string is a valid hexadecimal color value.
 * @param {string} hexValue - The hexValue parameter is a string representing a hexadecimal color
 * value.
 * @returns a boolean value indicating whether the provided hexValue is a valid hex color.
 */
export function isValidHexColor(hexValue: string): boolean {
  // const hexRegex = /^#([A-Fa-f0-9]{3,4}){1,2}$/;
  return /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hexValue);
};
/*
CSS HEX Color Validation

A CSS Hex color value starts with a hash `#` and is followed by either 3, 4, 6, or 8 characters (letters a-f and numbers 0-9). 
The 3 or 4 characters hex color value is shorthand, with the 4th character representing the alpha value for transparency.

Here's a JavaScript function that uses a regular expression to validate CSS hex color values:

```javascript
function isValidHexColor(hexValue) {
    return /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hexValue);
}
```

This function returns true if the input is a valid hex color, and false otherwise. The regular expression `^#([A-Fa-f0-9]{3,4}){1,2}$` ensures that:

- The string starts (`^`) with a `#`.
- It's followed by 3 or 4, or 6 or 8 (because `{1,2}` allows the 3 or 4 characters to be repeated once) hexadecimal characters (`[A-Fa-f0-9]`).
- And the string ends (`$`) after these characters. 

Let's test this function:

```javascript
console.log(isValidHexColor("#FFF")); // True
console.log(isValidHexColor("#FFFFFF")); // True
console.log(isValidHexColor("#FFFF")); // True
console.log(isValidHexColor("#FFFFFFF")); // True
console.log(isValidHexColor("#FFG")); // False
console.log(isValidHexColor("#hello")); // False
```
*/

type BooleanFunction = () => boolean;

export const isClient: BooleanFunction = () => {
  return typeof window !== 'undefined' /*&& Boolean('navigator' in window)*/;
};

export const isServer: BooleanFunction = () => {
  return typeof window === 'undefined';
};

interface IQueryParams {
  [key: string]: string;
};

/**
 * The function `querify` takes an optional object of query parameters and returns a string
 * representation of the parameters in URL query format.
 * @param {IQueryParams} [queryparams] - An optional object that represents the query parameters for a
 * URL.
 * @returns The function `querify` returns a string that represents a query string with the provided
 * query parameters. If `queryparams` is provided and is an object, the function will generate a query
 * string by mapping each key-value pair in `queryparams` and joining them with an ampersand (&)
 * separator. If `queryparams` is not provided or is an empty object, an empty string will
 */
function querify(queryparams?: IQueryParams) {
  return queryparams ? `?${Object.keys(queryparams).map(q => `${q}=${queryparams[q]}`).join('&')}` : '';
}

/**
 * The function `pathsify` takes an array of strings representing paths and returns a string with the
 * paths concatenated and separated by forward slashes.
 * @param {string[]} paths - An array of strings representing different paths.
 * @returns a string that starts with a forward slash ("/") followed by the elements of the `paths`
 * array joined together with forward slashes ("/"). Each element is converted to a string and any
 * forward slashes in the elements are removed.
 */
function pathsify(paths: string[]) {
  return `/${paths.map(path => path.toString().replace(/\//g, '')).join('/')}`;
}

/**
 * The `urlify` function takes a base URL, an optional array of paths, and optional query parameters,
 * and returns a formatted URL string.
 * @param {string} url - The `url` parameter is a string representing the base URL. It is the starting
 * point for constructing the final URL.
 * @param {string | string[]} paths - The `paths` parameter is used to specify additional paths to be
 * appended to the URL. It can be a single string or an array of strings. If it is a single string, it
 * will be appended as is. If it is an array of strings, they will be joined together with slashes ("/
 * @param {IQueryParams} [queryParams] - The `queryParams` parameter is an optional object that
 * represents the query parameters to be appended to the URL. It can contain key-value pairs where the
 * key represents the parameter name and the value represents the parameter value.
 * @returns a string that combines the `url`, `paths`, and `queryParams` into a single URL string.
 */
export function urlify(url: string, paths: string | string[] = [], queryParams?: IQueryParams) {
  return `${url}${pathsify(Array.isArray(paths) ? paths : [paths])}${querify(
    queryParams
  )}`;
}