import type { ChangeEvent } from "react";


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

export type Option = {
  id?: string;
  name: string;
  value: string | number | boolean;
};

export type InputType =
  | "text"
  | "date"
  | "datetime"
  | "checkbox"
  | "select"
  | "file"
  | "email"
  | "number"
  | "url"
  | "phone"
  | "radio"
  | "textarea";

export type FormFieldProps = {
  name: string;
  id?: string;
  isRequired?: boolean;
  validate?: boolean;
  regex?: string;
  type?: InputType;
  label?: string;
  data?: string | number | File | string[];
  options?: Option[];
  onInput?: (val: string | string[] | number | File, id: string) => void;
  isValid?: boolean | null;
  placeholder?: string;
  disabled?: boolean;
  validationMessage?: string;
};

export type FormChangeEvent = (
  e: ChangeEvent<
    HTMLSelectElement | HTMLTextAreaElement | HTMLTimeElement | HTMLInputElement
  >
) => void;

export function isDateValid(date: Date): boolean {
  return date instanceof Date && date.getTime() > 0;
}

export function isEmailValid(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isFileValid(file: File): boolean {
  return file instanceof File;
}

export function isNumberValid(number: number): boolean {
  return !Number.isNaN(number);
}

export function isStringValid(string: string): boolean {
  return typeof string === "string" && string.length > 0;
}

export function isUrlValid(url: string): boolean {
  return /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(
    url
  );
}

export function isPhoneValid(phone: string): boolean {
  return /^\+?[0-9]{10,15}$/.test(phone);
}

export function validator(
  data: string | File | number | string[],
  type?: InputType
): boolean {
  switch (type) {
    case "text":
    case "radio":
    case "textarea":
      return isStringValid(data as string);
    case "datetime":
      return isDateValid(new Date(data as string));
    case "checkbox":
      return Array.isArray(data) && data.length > 0;
    case "select":
      return typeof data === "string";
    case "file":
      return isFileValid(data as File);
    case "email":
      return isEmailValid(data as string);
    case "number":
      return isNumberValid(Number(data));
    case "url":
      return isUrlValid(data as string);
    case "phone":
      return isPhoneValid(data as string);
    default:
      return false;
  }
}

export function getValidationMessage(type?: InputType): string {
  switch (type) {
    case "email":
      return "Please enter a valid email";
    case "phone":
      return "Please enter a valid phone number";
    case "text":
      return "Please enter a valid text";
    case "datetime":
      return "Please enter a valid date";
    case "radio":
      return "Please select an option";
    case "checkbox":
      return "Please select at least one option";
    default:
      return "Please enter a valid value";
  }
}