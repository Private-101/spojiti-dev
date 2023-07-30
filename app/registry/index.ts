import React from "react";
// type Maybe<T> = T | T extends Record<string, infer U> ? Map<string, U> : null | undefined;
type Maybe<T> = T | T extends Record<string, any> ? keyof T : null | undefined;

// export interface IRegistryType {}
export interface Serializable<T extends any> {
    [key: string]: Maybe<T>;
}

// export type IRegistryType<T extends Serializable<unknown>> = Record<string, Maybe<T>>;

export interface IRegistryOptions {
    default: 0;
    [key: string]: Maybe<any>;
};

// export type IRegistryType = Record<string, Maybe<any>>;
// : IRegistryType<any>
// : Maybe<IRegistryType<T>>
const __DEFAULT_GLOBAL_REGISTRY_OPTIONS__: IRegistryOptions = {
    default: 0
};

export function registryFactory(opts: IRegistryOptions = __DEFAULT_GLOBAL_REGISTRY_OPTIONS__) {
    const registry = {
        default: opts.default ?? 0,
    }
};

