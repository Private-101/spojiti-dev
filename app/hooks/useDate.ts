import React from 'react';

export default function useDate() {
// Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC).
  const timestamp = Date.now();
  // Returns a date.
  const fullDate = new Date(timestamp);
  // Gets the year, using local time. 
  const fullYear = fullDate.getFullYear();
  // Gets the day-of-the-month, using local time.
  const dayOfMonth = fullDate.getDate();
  // Gets the month, using local time. 
  const month = fullDate.getMonth();
  // Gets the day of the week, using local time.
  const day = fullDate.getDay();
  // Gets the hours in a date, using local time. 
  const hours = fullDate.getHours();
  // Gets the minutes of a Date object, using local time. 
  const minutes = fullDate.getMinutes();
  // Gets the seconds of a Date object, using local time. 
  const seconds = fullDate.getSeconds();
  // Gets the milliseconds of a Date, using local time. 
  const miliseconds = fullDate.getMilliseconds();

  return {
    timestamp,
    fullDate,
    fullYear,
    dayOfMonth,
    month,
    day,
    hours,
    minutes,
    seconds,
    miliseconds
  };
}