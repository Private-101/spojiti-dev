import type { BaseObject } from "~/types/base";

export interface IPathPreference {};

export type PathPreferences = Record<string, IPathPreference>;
/* export let pathPreferences: { [k: string]: IPathPreference } = {
  "/user/info": {},
  "/user/me": {},
  "/user/accesses/{id}": {},
  "/users": {},
  "/users/{id}": {},
  "/tasks": {},
  "/tasks/{id}": {},
}; */

export type DefinedQueryTypes = {
  id: string;
  search: string;
  keyword: string;
  deleted: boolean;
  limit: number;
  offset: number;
  showDeleted: boolean;
  showInstalled: boolean;
  departmentRecursive: boolean;
};

export type TagFilters = (tags: string[]) => boolean;

/*
export function wrap<O extends BaseObject>(obj: O) {
  return {
    get: <K extends keyof O>(keys: K): any => {
      return obj.reduce((cur = obj, key: string) => {
        return cur[key];
      }, undefined);
    }
  }
}
*/


export function fastGet<S extends object>(obj: S, path: any[]): any {
  return path.reduce((cur: any = obj, key: string | number) => {
    return cur[key];
  }, undefined);
}

export const TermFilter = (field: string, value: string) => {
  return { term: { [field]: value } }
}

export const MatchFilter = (field: string, value: string) => {
  return { match: { [field]: value } }
}

const contains = (data: any[], item: any) => {
    if (!item.value) { return true; }
    return data[item.field].toLowerCase().includes(item.value.toLowerCase());
  };
  const doesNotContain = (data: any[], item: any) => {
    if (!item.value) { return true; }
    return !data[item.field].toLowerCase().includes(item.value.toLowerCase());
  };
  const equals = (data: any[], item: any) => {
    if (!item.value) { return true; }
    return data[item.field].toString().toLowerCase() === item.value.toString().toLowerCase();
  };
  const isNotEqual = (data: any[], item: any) => {
    if (!item.value) { return true; }
    return data[item.field].toString().toLowerCase() !== item.value.toString().toLowerCase();
  };
  const more = (data: any[], item: any) => data[item.field] > item.value;
  const less = (data: any[], item: any) => data[item.field] < item.value;
  const filterItem = (data: any[], filter: any) => {
    switch (filter.operator) {
      case 'contains': return contains(data, filter);
      case 'doesNotContain': return doesNotContain(data, filter);
      case '=': return equals(data, filter);
      case '<>': return isNotEqual(data, filter);
      case '>': return more(data, filter);
      case '<': return less(data, filter);
      default: throw Error('unknown operator');
    }
  };
  
  const filterGroup = (data: any[], groupName: string, items: any[]): any[] =>
    (groupName.toLowerCase() === 'or' ? filterGroupOr(data, items) : filterGroupAnd(data, items));
  
  export const filterGroupOr = (data: any[], items: any[]): any[]  => {
    const filteredData = items.reduce((initialData: any, item: any) => {
      if (item.items) {
        const grouped = filterGroup(data, item.groupName, item.items);
        return initialData.concat(grouped.filter((d: any) => initialData.indexOf(d) < 0));
      }
      return initialData.concat(data.filter((d: any) => initialData.indexOf(d) < 0 && filterItem(d, item)));
    }, []);
    return data.filter((d) => filteredData.includes(d));
  };
  
  export const filterGroupAnd = (data: any[], items: any[]): any[]  => {
    return items.reduce((initialData: any[], item: any) => {
      if (item.items) { return filterGroup(initialData, item.groupName, item.items); }
      return initialData.filter((d: any[]) => filterItem(d, item));
    }, data);
  };
  
  export const filterData = (data: any[] , filterValue: any): any[]  => {
    return filterGroup(data, filterValue.groupName, filterValue.items);
  };