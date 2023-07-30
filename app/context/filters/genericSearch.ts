// export type FilterFn<T> = (item: T, index: number) => boolean;
// export type ANDIFOR<A, B> = (filterFn: FilterFn<A | B>, filterThis: A, byThat: B) => {type: 'and'; payload: {this: A; that: B}} | {type: 'if'; payload: { this: A; then: B, reversed: boolean}} | {type: 'or'; selected: A | B}
// const connect: ANDIFOR<any, any> = ((item, index) => {})

export interface ISearch<T> {
    properties: Array<keyof T>;
    query: string;
};

// case insensitive search of n-number properties of type T
// returns true if at least one of the property values includes the query value
export function genericSearch<T>(
    object: T,
    search: ISearch<T>
): boolean {

    if (search.query === "") {
        return true;
    } 

    return search.properties.some((property) => {
        const value = object[property];
        if (typeof value === "string" || typeof value === "number") {
            return value.toString().toLowerCase().includes(search.query.toLowerCase());
        }
        return false;
    });
}