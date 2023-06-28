export interface User {
    name: string;
    age: number;
}

export interface Box<T extends string | number> {
    value: T;
}

// let numberBox: Box<number> = {value: 10}; // OK
// let stringBox: Box<string> = {value: 'Hello'}; // OK
// let booleanBox: Box<boolean> = {value: true}; // Error