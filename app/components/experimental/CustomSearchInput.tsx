import * as React from "react";
import { useEffect, useState } from "react";
import useDebounce from "~/hooks/useDebounce";
import { genericSearch } from "~/utils/filters/genericSearch";
import type { IUserCardProps } from '~/temp/dev/types';
import type { PropsWithChildrenFunction } from "~/types";

export interface ISearchProps<T> {
  data: Array<T>;
  propertiesToSearchOn: Array<keyof T>
}

export default function CustomSearchInput<T extends {}>(
  props: PropsWithChildrenFunction<ISearchProps<T>, T>
) {
  const { data, propertiesToSearchOn, children } = props;
  const [searchQuery, setSearchQuery] = useState<string>("");
  const debouncedSearchQuery = useDebounce(searchQuery, 250);

  useEffect(() => {
    if (debouncedSearchQuery !== undefined) {
      setSearchQuery(debouncedSearchQuery);
    }
  }, [debouncedSearchQuery, setSearchQuery]);

  return (
    <>
      <label htmlFor="search" className="mt-3">
        Search! Try me! (I work!)
      </label>
      <input
        id="search"
        className="form-control full-width"
        type="search"
        placeholder="Search..."
        aria-label="Search"
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      {children &&
        data
          .filter((obj) =>
            genericSearch<T>(
              obj,
              propertiesToSearchOn,
              searchQuery
            )
          )
          .map((x) => children(x))}
    </>
  );
}