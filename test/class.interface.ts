export interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}

/* 
export class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}
*/