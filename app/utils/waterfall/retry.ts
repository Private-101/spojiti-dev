// Inspired by https://github.com/zeit/async-retry
// Without the retry dependency (1 kB gzipped +)
import type { AsyncAnyFunction } from "./types";

interface RetryOptions {
    retries: number
};

const defaultOptions: RetryOptions = {
    retries: 3
}
async function retry(tryFunction: AsyncAnyFunction, options: RetryOptions = defaultOptions) {
    const { retries } = options;
  
    let tries = 0;
    let output = null;
    let exitErr = null;
  
    const bail = (err: unknown) => {
      exitErr = err;
    };
  
    while (tries < retries) {
      tries += 1;
      try {
        output = await tryFunction({ tries, bail });
        break;
      } catch (err) {
        if (tries >= retries) {
          throw err;
        }
      }
    }
  
    if (exitErr) {
      throw exitErr;
    }
  
    return output;
  }
  
  export default retry;