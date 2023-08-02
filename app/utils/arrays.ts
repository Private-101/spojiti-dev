interface IBaseItem {[key: string]: any | any[]}

export const safeAddItem = <T extends IBaseItem>(item: T, array: T[] = []): T[] => {
    return array.concat([item]);
  };
  
  export const safeDeleteItem = <T extends IBaseItem>(item: T, keyField: keyof T, array: T[]): T[] => {
    const keyValue = item[keyField];
    return array.filter((i) => i[keyField] !== keyValue);
  };
  
  export const safeInsertOrReplaceItem = <T extends IBaseItem>(item: T, keyField: keyof T, array: T[]): T[] => {
    const newArray = [...array];
    const keyValue = item[keyField];
    const index = newArray.findIndex((i) => i[keyField] === keyValue);
    index >= 0 ? newArray.splice(index, 1, item) : newArray.push(item);
    return newArray;
  };