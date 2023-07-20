/*
This function takes multiple arguments, each can be a string, number, object or an array. 
For strings and numbers, it simply adds them to the classes array. 
For arrays, it recursively calls the `classNames` function. 
For objects, it includes each key in the result where the corresponding value is truthy.

The resulting array of class names is then joined into a single 
string with spaces in between, and this string is returned.

The key optimizations are:
1. The function definition syntax is clearer than plain javascript.
2. TypeScript types included for better error-checking.
3. ES6 syntax is used for readability and brevity.
*/

// Declaring a type for the input that the function can receive
type ClassValue = string | number | ClassDictionary | ClassArray;

interface ClassDictionary {
  [id: string]: boolean | undefined | null;
}

interface ClassArray extends Array<ClassValue> {} // eslint-disable-line @typescript-eslint/no-empty-interface

export default function classNamesV2(...args: ClassValue[]): string {
  const classes: string[] = [];

  for (const arg of args) {
    if (!arg) continue;

    const argType = typeof arg;

    if (argType === 'string' || argType === 'number') {
      classes.push(arg.toString());
    } else if (Array.isArray(arg) && arg.length) {
      const inner = classNamesV2(...arg);
      if (inner) {
        classes.push(inner);
      }
    } else if (argType === 'object') {
      for (const key in arg as ClassDictionary) {
        if (arg.hasOwnProperty(key) && (arg as ClassDictionary)[key]) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(' ');
};