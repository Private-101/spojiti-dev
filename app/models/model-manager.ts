import type { MutableRefObject } from 'react';

export type ModelListener<T> = (value: T) => void;

export default class ModelManager<T> {
  private disposed = false;

  private ref?: MutableRefObject<T>;

  public initialized = false;

  private listeners = new Set<ModelListener<T>>();

  subscribe(callback: ModelListener<T>): () => void {
    if (!this.disposed) {
      this.listeners.add(callback);
    }
    return () => {
      if (!this.disposed) {
        this.listeners.delete(callback);
      }
    };
  }

  consume(value: T): void {
    if (!this.disposed) {
      this.hydrate(value);
      // this.ref = {
        // current: value,
      // };
      for (const listener of this.listeners.keys()) {
        listener(value);
      }
    }
  }

  hydrate(value: T): void {
    if (!this.disposed && !this.initialized) {
      this.ref = {
        current: value,
      };
      this.initialized = true;
    }
  }

  hasValue(): boolean {
    return !!this.ref;
  }

  get value(): T {
    if (!this.ref || !this.ref.current) {
      throw new Error('Unexpected missing model reference.');
    }
    return this.ref.current;
  }

  public destroy(): void {
    if (!this.disposed) {
      this.listeners.clear();
      this.ref = undefined;
      this.disposed = true;
    }
  }
}