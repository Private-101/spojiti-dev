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
 * Capitalizes the first letter of every word in a string.
 * @param str - The string to be transformed.
 */
export function titleCase(str: string): string {
  return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

export function unslugify(str: string): string {
  return str.toLowerCase().split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
};

export function isValidTheme(theme: string): boolean {
  return theme === 'light' || theme === 'dark';
}

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