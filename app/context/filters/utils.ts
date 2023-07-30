/*
https://camchenry.com/blog/typescript-type-guards

Summary
In general, I would recommend using the type guard that feels the most natural, which will come from experience. Don't write a custom type guard function when a simple typeof check can suffice. However, it may be necessary to write a custom type guard.

To summarize the strengths of each type guard, here is a summary table.

Type guard	Usage
Boolean / truthiness	Rule out falsy values like null, undefined, '', 0, etc.
Equality	Narrow multiple possible types down to a single type
typeof	Narrow a type to a primitive type (like string or number)
instanceof	Check if a value is an instance of a specific class
in	Check if a property can be accessed
Assertion function	Assert invariants that should always be true
Custom type guard function	Check that a type meets some arbitrary conditions
*/


// helper functions
export function validate(value: unknown): boolean {
    assertString(value);
    return !!value && value.trim().length > 0;
};

export const BASE_REGEX_PATTERNS = {
    SpecialChars: /[^\w\s]/g
};

export const BASE_REGEX_REPLACERS = {
    Space: " ",
    Dash: "-",
    Underline: "_",
    Comma: ",",
    Period: ".",
    Pipe: "|",
    SemiColon: ";",
    NONE: undefined
};

export function normalize(value: string, patterns: RegExp[] = [BASE_REGEX_PATTERNS.SpecialChars], replacer: string = BASE_REGEX_REPLACERS.Space): string {
    return patterns.map((regex) => regex.test(replacer) ? value.trim().toLowerCase() : value.replace(regex, replacer).trim().toLowerCase()).join(BASE_REGEX_REPLACERS.NONE);
};

export function assertString(value: unknown): asserts value is string {
    if (typeof value !== "string") {
      throw new TypeError(`Expected 'string', got: '${typeof value}'`);
    }
  };

  export function isDefined<Value>(value: Value | undefined | null): value is Value {
    return value !== null && value !== undefined;
  };
type Maybe<T> = T | null | undefined;
  // Remove all values that are null or undefined values from an array.
  // Using the isDefined type guard we just defined, we can use it with the built-in Array.filter function, 
  // which has special support for type predicates. The Array.filter function is defined like: 
  export function stripNullFromArray<T>(array: Maybe<T>[]): T[] {
    return array.filter(isDefined); // value is T
  };
/*
  export function stripNullFromObj<T>(
    obj: {[key: string]: Maybe<T>},
    predicate: (value: Maybe<T>, index: number, array?: Maybe<T>[]) => value is T
  ): {[key: string]: T} {
    let clone = Object.assign({}, obj)
    let {[key: string]: Maybe<T>}: {[key: string]: T} = {};
    let entries = Object.entries(obj).filter((value, index) => predicate(value[1], index)).map((value, index, filteredClone) => filteredClone[value[0] = value[1] as T])
    let filtered = Object.values(obj).filter(predicate);
    let reduced = filtered.reduce((previousValue, currentValue) => {
        filtered.filter((item, index) => item == currentValue && {item, index}).map((value, i) => {
            if ()
        })
    }, {}) // array.filter(predicate);
  }

export function stripNullFromArray<Filtered extends Item>(
  predicate: (value: Item, index: number, array: Item[]) => value is Filtered
): Filtered[];
*/

/**
 * Convert an object to another by mapping keys
 *
 * @param {any} obj The object you want to convert
 * @param {TKeys} keys An object where each key matches a key in T and the respective value matches the corresponding key in obj
 * @returns {T} The new object that has had its relevant keys populated from obj
 */

// interface ExtractedKeys<T> {[key: string]: T[keyof T]};
// TKeys extends ExtractedKeys<T>
// TKeys extends T[keyof T]
export const convert = <T extends {[key: string]: unknown}, TKeys extends [keyof T]>(obj: T, keys: TKeys) : T => {
    let objValues = Object.values(obj);
    return Object.keys(keys).map((key, index) => { return {[key]: index}}).reduce((accumulator, item) => ({ 
        ...accumulator,
        [item.key]: objValues[item.index] as unknown
        // [key]: obj[keys[key as keyof TKeys]] as unknown,
      }), {}) as T
};






