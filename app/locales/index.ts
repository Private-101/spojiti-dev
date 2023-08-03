import type { ILang } from "./types";
import { enUS } from "./en-us";
import { zhCN } from "./zh-cn";

// default locale is Chinese
export const DEFAULT_LOCALE = {
    _locale_: 'en-us',
    _data_: enUS as ILang
};

export let __internal__ = {
    _locale_: 'en-us',
    _data_: enUS as ILang
};

export type LocaleType = typeof __internal__;

export function useZH_CN() {
    __internal__._locale_ = 'zh-cn';
    __internal__._data_ = zhCN as ILang;
}

export function useEN_US() {
    __internal__._locale_ = 'en-us';
    __internal__._data_ = enUS as ILang;
}

export function formatString(template: string, data: { [k: string]: string }) {
  for (var key in data) {
    template = template.split(`{${key}}`).join(data[key]);
  }

  return template;
}