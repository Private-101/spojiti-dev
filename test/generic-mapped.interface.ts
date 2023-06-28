// export interface GenericMappedType<T> {
    // [P in keyof T]: T[P];
// }

/*
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
*/

export type FnReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
