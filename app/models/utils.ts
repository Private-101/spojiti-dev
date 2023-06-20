/*
import * as React from 'react';
import type { JobPost, JobApplication, User } from '@prisma/client';
import { rejects } from 'assert';

const START_INDEX = 0;
const ARRAY_SIZE = 20;
const RESPONSE_TIME_IN_MS = 1000;

export interface Item<T> {
  key: number;
  value: T;
}

interface Response<T> {
  hasNextPage: boolean;
  data: Item<T>[];
}

interface Options {
    startIndex: number;
    arraySize: number;
};

const defaultOptions: Options = {
    startIndex: START_INDEX,
    arraySize: ARRAY_SIZE
};
*/
/**
 * 
 * @param items 
 * @param options 
 * @returns 
 * 
 * @example
 * const jobs = await getAllJobPosts(); // get all jobs, lets say jobs = 50
 * const items = loadItems<JobPost>(jobs); // use with default options, items should = 20
 */

/*
function loadItems<T>(items: Array<T>, options: Options = defaultOptions): Promise<Response<T>> {
  return new Promise((resolve, reject) => {
    let total = items.length;

    if (!total || total < 1) {
        // fail quickly, before doing unnecessary functions...
        reject("Error loading items");
    };

    let itemArray: Item<T>[] = [];

    setTimeout(() => {
      for (let i = options.startIndex; i < options.startIndex + options.arraySize; i++) {
        const newItem = {
          key: i,
          value: items[i],
        };
        itemArray = [...itemArray, newItem];
      }

      resolve({ hasNextPage: itemArray.length < total, data: itemArray.slice(-options.arraySize) });
    }, RESPONSE_TIME_IN_MS);
  });
}

export function useLoadItems<T>(items: Array<T>) {
  const [loading, setLoading] = React.useState(false);
  const [savedItems, setSavedItems] = React.useState<Item<T>[]>([]);
  const [hasNext, setHasNext] = React.useState<boolean>(true);
  const [hasPrevious, setHasPrevious] = React.useState<Array<T>>([])
  const [error, setError] = React.useState<Error>();

  async function loadMore() {
    setLoading(true);
    try {
      const { data, hasNextPage: newHasNextPage } = await loadItems(items);
      setSavedItems((current) => [...current, ...data]);
      setHasNext(newHasNextPage);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }

  return { loading, savedItems, hasNext, error, loadMore };
}
*/