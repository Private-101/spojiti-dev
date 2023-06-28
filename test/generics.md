Sure, here are a few examples of more advanced uses of generics and mapped types:

1. **Constraining Generics**

You can constrain generics to a certain type or types by using the `extends` keyword.

```typescript
interface Box<T extends string | number> {
    value: T;
}

let numberBox: Box<number> = {value: 10}; // OK
let stringBox: Box<string> = {value: 'Hello'}; // OK
let booleanBox: Box<boolean> = {value: true}; // Error
```

2. **Generic Classes**

You can use generics with classes, just like you would with interfaces.

```typescript
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}
```

3. **Generic Constraints**

You can declare a type parameter that is constrained by another type parameter.

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
```

4. **Mapped Types**

Mapped types allow you to create new types based on old types.

```typescript
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

type Partial<T> = {
    [P in keyof T]?: T[P];
};
```

5. **Conditional Types**

Conditional types select one of two possible types based on a condition expressed as a type relationship test.

```typescript
type TypeName<T> =
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    T extends undefined ? "undefined" :
    T extends Function ? "function" :
    "object";
```

6. **Inferring Types in Conditional Types**

You can also infer types within the `extends` clause of a conditional type.

```typescript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
```

These examples should give you a good sense of the power and flexibility that generics and mapped types provide in TypeScript. They are key features for creating reusable and dynamic type definitions.