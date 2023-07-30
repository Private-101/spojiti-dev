export interface IFilter<T> {
    property: keyof T;
    isTruthyPicked: boolean;
}

// filter n properties for truthy or falsy values on type T (no effect if no filter selected)
export function genericFilter<T>(object: T, filters: Array<IFilter<T>>) {
  // no filters; no effect - return true
  if (filters.length === 0) {
    return true;
  }

  return filters.every((filter) => {
    return filter.isTruthyPicked ? object[filter.property] : !object[filter.property];
  });
};

/*
https://stackoverflow.com/questions/72691770/generic-filter-for-x-number-of-properties

 /**
   *
   * @returns A new list of filtered objects
   * @param objects The objects that we want to filter
   * @param properties The properties we want to apply on the object and compare with the query
   * @param queries The queries we want to filter by
   /

 export function genericFilter<T>(
  objects: T[], 
  properties: Array<keyof T>,
  queries: Array<string>[] | Array<number>[] 
  ):T[] {
      return objects.filter((object) =>  {
          var count = 0;
          properties.some((props) => {
              const objectValue = object[props]
              if(typeof objectValue === "string" || typeof objectValue === "number") { 
                  queries.forEach((query) => {
                      query.forEach((queryValue) => { 
                          if(queryValue === objectValue) {
                              count+=1;
                          }
                      })
                  })   
              }
          })
          return count === properties.length;
      })
}

export default genericFilter;
How you call the function, can include X amount of filters and strings to search for.

const result = genericFilter(assets, ["description", "id", "name"], [selectedAssetTypes, selectedIds, selectedNames])
*/

