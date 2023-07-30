export type SortOption = 'asc' | 'desc';
export type SortBy<T> = Extract<keyof T, string | number | Date>;

export interface ISortOptions<T> {
    property: SortBy<T>;
    direction?: SortOption;
    isDescending: boolean;
};

// comparator function for any property within type T
// works for: strings, numbers, and Dates (and is typed to accept only properties which are those types)
// could be extended for other types but would need some custom comparison function here
export function genericSort<T>(
  objectA: T,
  objectB: T,
  sort: ISortOptions<T>
) {
  const result = () => {
    if (objectA[sort.property] > objectB[sort.property]) {
        return 1;
    } else if (objectA[sort.property] < objectB[sort.property]) {
        return -1;
    } else {
        return 0;
    }
  }

  return sort.direction && sort.direction === 'desc' || sort.isDescending ? result() * -1 : result();
};

interface SortingKey<T  extends {[key: string]: unknown}> {
  key: keyof T;
  desc?: boolean;
}

export function useObjectSort<T extends {[key: string]: unknown}>(array: T[], ...keys: (keyof T | SortingKey<T>)[]): T[] {
  const caseSensitive = typeof keys[keys.length - 1] === 'boolean'
    ? keys.pop()!
    : false;
  const keysLength = keys.length;

  return array.sort((obj1, obj2) => {
    for (let i = 0; i < keysLength; i++) {
      let key: keyof T | SortingKey<T>;
      let desc = false;
      let a, b;

      if (typeof keys[i] !== 'string') {
        key = (keys[i] as SortingKey<T>).key;
        desc = (keys[i] as SortingKey<T>).desc || false;
      } else {
        key = keys[i] as string;
      }

      a = obj1[key];
      b = obj2[key];

      if (caseSensitive === false && typeof a === 'string' && typeof b === 'string') {
        a = a.toLowerCase();
        b = b.toLowerCase();
      }

      if (!desc) {
        if (a < b) return -1;
        if (a > b) return 1;
      } else {
        if (a > b) return -1;
        if (a < b) return 1;
      }
    }
    return 0;
  });
}
