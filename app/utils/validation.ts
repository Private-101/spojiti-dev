


export const isEmpty = (value: any): boolean => (value == null || value.length === 0);

/**
 * Assumes true for a non-browser env, otherwise makes a best effort
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilityState
 */
export function isDocumentVisible(): boolean {
    // `document` may not exist in non-browser envs (like RN)
    if (typeof document === 'undefined') {
      return true
    }
    // Match true for visible, prerender, undefined
    return document.visibilityState !== 'hidden'
  }

  export function isNotNullish<T>(v: T | null | undefined): v is T {
    return v != null || v != undefined;
  }

  /**
 * Assumes a browser is online if `undefined`, otherwise makes a best effort
 * @link https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine
 */
export function isOnline() {
    // We set the default config value in the store, so we'd need to check for this in a SSR env
    return typeof navigator === 'undefined'
      ? true
      : navigator.onLine === undefined
      ? true
      : navigator.onLine
  }

  export function isValidUrl(string: string) {
    try {
      new URL(string)
    } catch (_) {
      return false
    }
  
    return true
  };

  export function isArray<T>(
    entities: readonly T[] | Record<string, T>, force: boolean = false
  ): T[] | false {
    if (!entities) {
        return false
    };

    if (!force) {
        if (!Array.isArray(entities)) {
            return false
        };
    };
    
    if (!Array.isArray(entities)) {
        return Object.values(entities)
    }
  
    return entities as T[]
  };

  type WindowValidationOptions<T> = keyof T extends keyof Window ? T : never;
  
  export function isWindow<T>(options?: WindowValidationOptions<T>): boolean {
    // && window.localStorage && typeof window.localStorage.getItem == 'function'
    // if (!options) return typeof window !== 'undefined';
   //  let values: string[] = [];
    // for (const key in options) {
     //  options[key] = true ? values.push(key) : null;
      // return key in Window ? values[key] = true : false
   //  }
    return false
  }
  // export const isWindow = typeof window !== 'undefined' ? (window as any) : undefined