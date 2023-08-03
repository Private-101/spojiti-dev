


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

  export function validatetLatLng(value: Partial<GeolocationCoordinates> | string | Array<string | number> | Record<string, string>) {
    if (typeof value === 'string') { 
      const [lat, lng] = value.split(',').map((v) => parseFloat(v))
      return { lat, lng }
    } else if (Array.isArray(value)) {
      if (typeof value[0] === 'string' && typeof value[1] === 'string') {
        return { lat: parseFloat(value[0]), lng: parseFloat(value[1]) }
      }
      return { lat: value[0], lng: value[1] }
    } else if (typeof value === 'object') {
      if ('lat' in value && ('lon' in value || 'lng' in value)) {
        return {
          lat: parseFloat(value.lat as unknown as string),
          lng: parseFloat(value.lon ?? value.lng as unknown as string)
        }
      }
    }
    return null
  };

  export const getKeyValue = (keys: string[], obj: Record<string, any>) => {
    for (const key of keys) {
      if (obj[key] && obj[key].length > 0) return obj[key].toString()
    }
    return ''
  }

  export const canUseDom: boolean = !!(typeof window !== "undefined" && window.document && window.document.createElement);