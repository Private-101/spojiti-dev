/* 
The `MemoryCache` class is a TypeScript implementation of a 
caching mechanism that stores expensive operation results in memory 
for a specified time period. 
*/

export type ExpensiveOperation<T, K> = (key: K) => Promise<T>;

interface Extracted<T, K> {
  get(key: K): Promise<T>;
}

export default class MemoryCache<T, K> implements Extracted<T, K> {
  private store: Map<K, { expires: number; obj: T }>;
  private expensiveOperation: ExpensiveOperation<T, K>;
  private ttl: number;

  public constructor(
    expensiveOperation: ExpensiveOperation<T, K>,
    ttl: number = 30
  ) {
    this.store = new Map();
    this.ttl = ttl * 1000;
    this.expensiveOperation = expensiveOperation;
  }

  public async get(key: K): Promise<T> {
    // Already cached
    const existing = this.store.get(key);
    if (existing && existing.expires > Date.now()) {
      return existing.obj;
    }

    // Do the expensive operation and cache it
    const obj = await this.expensiveOperation(key);
    this.store.set(key, {
      expires: Date.now() + this.ttl,
      obj,
    });
    return obj;
  }
};