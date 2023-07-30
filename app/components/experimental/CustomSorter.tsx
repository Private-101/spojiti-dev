import * as React from "react";
import { useState } from "react";
import type { ISortOptions } from "~/context/filters/genericSort";
import type { PropsWithChildrenFunction } from "~/types";
import { genericSort } from "~/context/filters/genericSort";
import type { IUserCardProps } from '~/temp/dev/types';

export interface ISortOptionssProps<T> {
  defaultProperty: Extract<keyof T, string | number | Date>;
  data: Array<T>;
}

export default function CustomSorter<T extends {}>(props: PropsWithChildrenFunction<ISortOptionssProps<T>, T>) {
  const { data, defaultProperty, children } = props;
  const [activeSorter, setActiveSorter] = useState<ISortOptions<T>>({
    property: defaultProperty,
    isDescending: true,
  });
  const object = data.length > 0 ? data[0] : {};
  return (
    <>
      <label htmlFor="sorters" className="mt-3">Sorters! Try us too! (We also work!)</label>
      <select
        id="sorters"
        className="custom-select"
        onChange={(event) =>
          setActiveSorter(
            {property: event.target.ariaLabel as Extract<keyof T, string | number | Date>,
            isDescending: event.target.value === "desc"}
          )
        }
        defaultValue={"category"}
      >
        {Object.keys(object as T).map((key) => {
          if (!key) {
            return <></>
          };
          if (data.length <= 0) {
            return <></>
          };

          return (
            <>
              <option
                aria-label={key}
                key={`${key}-desc`}
                value="desc"
              >
                sort by '{key}' descending
              </option>
              <option
                aria-label={key}
                key={`${key}-asc`}
                value="asc"
              >
                sort by '{key}' ascending
              </option>
            </>
          );
        })}
      </select>
      {children && data
            .sort((objA, objB) =>
            genericSort<T>(objA, objB, activeSorter)
          )
            .map(x => children(x))
          }
    </>
  );
}