import bcrypt from 'bcryptjs';
import type { ReactNode } from 'react';

export const randomString = (qty: number = 36) =>
  Math.random().toString(qty).substring(7).split('').join('.');

export const getHash = async (value: string = randomString(), salt: string | number = 10) => {
    const hash = await bcrypt.hash(value, 10);
    return hash;
  };

export const validateHash = async (value: string, hash: string) => bcrypt.compare(value, hash);

export function isValidKey(key: string, whitelist: string[]) {
    return whitelist.indexOf(key) > -1
  };

export function capitalize(str: string) {
    return str.replace(str[0], str[0].toUpperCase())
  }

  export const pluralize = (text: string, count: number) => {
    return count > 1 || count === 0 ? `${text}s` : text;
  };
  
  export const truncate = (text: string, length: number) => {
    return text ? `${text.substring(0, length - 1)}...` : text;
  };
  
  export const isEmptyOrNull = (text: string) => {
    return !text || !text.trim();
  };

  const MINUTE = 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;
const MONTH = DAY * 30;
const YEAR = DAY * 365;

export const getTimeSinceToday = (time: Date | string) => {
  const updateTimeSeconds = new Date(time).getTime();
  const currentTimeSeconds = new Date().getTime();

  let seconds = Math.abs(currentTimeSeconds - updateTimeSeconds) / 1000;
  seconds = seconds > 0 ? seconds : 1;

  let [value, unit] =
    seconds < MINUTE
      ? [Math.round(seconds), 'second']
      : seconds < HOUR
      ? [Math.round(seconds / MINUTE), 'minute']
      : seconds < DAY
      ? [Math.round(seconds / HOUR), 'hour']
      : seconds < WEEK
      ? [Math.round(seconds / DAY), 'day']
      : seconds < MONTH
      ? [Math.round(seconds / WEEK), 'week']
      : seconds < YEAR
      ? [Math.round(seconds / MONTH), 'month']
      : [Math.round(seconds / YEAR), 'year'];

  unit = pluralize(unit, value);

  return `${value} ${unit} ago`;
};

export function genericParseText<T extends string>(
  text: string,
  pattern: RegExp,
  fn: (match: T) => ReactNode,
) {
  if (!(text && typeof text === 'string')) return [text].filter(Boolean)

  const matches = text.match(new RegExp(pattern, 'g'))?.map((item) => item) as T[]
  if (!(matches && matches.length)) return [text].filter(Boolean)

  return text.split(pattern).reduce((result, item, index) => {
    if (!matches[index]) return result.concat([item].filter(Boolean))

    return result.concat([item, fn(matches[index])].filter(Boolean))
  }, [] as ReactNode[])
}








