

function qsStringify(queries: { [k: string]: any }) {
  return queryString.stringify(queries, { arrayFormat: "bracket" });
}
export type Id = string;

export interface BaseObject {
    [k: string]: any;
  };

export type ExtractObj<O extends object, K> = K extends keyof O ? O[K] : never;